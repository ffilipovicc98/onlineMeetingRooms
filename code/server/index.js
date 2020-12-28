const express = require('express');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 5000;

const router = express.Router();

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: '*',
    },
});
app.use(cors());
// app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));
// app.use(bodyParser.urlencoded({ extended: true }));

class User {
    constructor(socket, roomID) {
        this.socket = socket;
        this.userID = socket.id;
        this.userName = undefined;
        this.roomID = roomID;
        this.isCurrentUserHost = undefined;
    }

    setUserName(value) {
        this.userName = value;
    }

    setIsCurrentUserHost(value) {
        this.isCurrentUserHost = value;
    }
}

class Room {
    constructor(roomID, roomName, hostName) {
        this.roomID = roomID;
        this.roomName = roomName;
        this.hostName = hostName;
        this.users = new Map();
        this.messages = [];
    }
}

class Message {
    constructor(userID, content) {
        const userName = appLogic.users.get(userID).userName;

        this.messageID = uuidv4();
        this.userID = userID;
        this.userName = userName;
        this.content = content;
        this.time = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
        // this.hours = this.time.getHours();
        // this.minutes = this.time.getMinutes();
    }
}

class App {
    constructor() {
        this.users = new Map();
        this.rooms = new Map();
    }

    addRoom(roomID, roomName, hostName) {
        this.rooms.set(roomID, new Room(roomID, roomName, hostName));
    }

    removeRoom(roomID) {
        const room = this.rooms.get(roomID);
        for (let [userID, user] of room.users) {
            this.removeUser(userID);
        }
    }

    addUser({
        socket,
        userName,
        isCurrentUserHost,
        roomName,
        roomID,
        hostName,
    }) {
        const userID = socket.id;
        if (!this.rooms.has(roomID) && isCurrentUserHost) {
            this.addRoom(roomID, roomName, hostName);
        }
        let status = 'addUser: Vec postoji korisnik sa datim ID-em';
        if (!this.users.has(userID)) {
            const user = new User(socket, roomID);
            user.setUserName(userName);
            user.setIsCurrentUserHost(isCurrentUserHost);
            user.socket.join(roomID);
            this.users.set(userID, user);
            this.rooms.get(roomID).users.set(userID, user);
            this.sendRoomDataToClient(socket, this.rooms.get(roomID));
            if (!user.isCurrentUserHost) {
                this.sendInfoAboutNewUserToOtherUsersInRoom(user);
            }
            status = 'ok';
        }
        return status;
    }

    sendRoomDataToClient(socket, room) {
        socket.emit('roomInfoOnJoin', {
            roomID: room.roomID,
            roomName: room.roomName,
            hostName: room.hostName,
            users: Array.from(room.users.values(), (user) => ({
                userName: user.userName,
                userID: user.userID,
                isHost: user.isCurrentUserHost,
            })),
            messages: room.messages,
        });
    }

    sendInfoAboutNewUserToOtherUsersInRoom(user) {
        user.socket.to(user.roomID).emit('newUser', {
            userName: user.userName,
            userID: user.userID,
            isHost: user.isCurrentUserHost,
        });
    }

    removeUser(userID) {
        const user = appLogic.users.get(userID);
        let shouldRemoveRoom = false;
        if (user.isCurrentUserHost) {
            shouldRemoveRoom = true;
        }
        user.socket.leave(user.roomID);
        this.rooms.get(user.roomID).users.delete(userID);
        this.users.delete(userID);
        if (shouldRemoveRoom) {
            user.socket.to(user.roomID).emit('meetingEnded');
            this.rooms.delete(user.roomID);
        } else {
            user.socket.to(user.roomID).emit('userLeft', {
                userName: user.userName,
                userID: user.userID,
                isHost: user.isCurrentUserHost,
            });
        }
    }

    getFiveRooms() {
        const rooms = [];
        for (let [roomID, room] of this.rooms) {
            rooms.push({
                roomName: room.roomName,
                hostName: room.hostName,
                roomID,
            });
            if (rooms.length >= 5) {
                break;
            }
        }
        return rooms;
    }
}

const appLogic = new App();

io.on('connection', (socket) => {
    console.log(`Imamo korisnika ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`Ode jedan korisnik ${socket.id}`);
        appLogic.removeUser(socket.id);
    });

    socket.on('leave', () => {
        appLogic.removeUser(socket.id);
    });

    socket.on('join', (userData, callback) => {
        const status = appLogic.addUser({ socket, ...userData });
        callback({ status });
    });

    socket.on('sendMessageToServer', ({ userID, content }) => {
        if (appLogic.users.has(userID)) {
            const user = appLogic.users.get(userID);
            const room = appLogic.rooms.get(user.roomID);
            const message = new Message(userID, content);
            room.messages.push(message);
            io.in(room.roomID).emit('sendMessageToUsersInRoom', message);
        }
    });
});

setInterval(() => {
    console.log(appLogic);
}, 5000);

// const rooms = [
//     {
//         roomName: 'MATF - Računarske mreže vežbe',
//         host: 'Ivan Ristović',
//         roomID: 1,
//     },
//     {
//         roomName: 'MATF - Računarske mreže predavanja',
//         host: 'Aleksandar Kartelj',
//         roomID: 2,
//     },
//     {
//         roomName: 'MATF - Razvoj softvera vežbe',
//         host: 'Nikola Ajzenhamer',
//         roomID: 3,
//     },
//     {
//         roomName: 'JavaScript Workshop',
//         host: 'Wes Bos',
//         roomID: 4,
//     },
// ];

router.get('/rooms', (req, res) => {
    res.send(appLogic.getFiveRooms());
});

router.get('/rooms/:roomID', (req, res) => {
    const { roomID } = req.params;
    if (appLogic.rooms.has(roomID)) {
        const room = appLogic.rooms.get(roomID);
        res.send({ roomName: room.roomName, hostName: room.hostName });
    } else {
        res.send({ roomName: undefined, hostName: undefined });
    }
});

router.post('/rooms', (req, res) => {
    console.log('POST');
    console.log(req.body);
    const newUser = {
        roomName: 'RM Odbrana projekta',
        host: 'Filip Filipovic',
        roomID: 5,
    };
    rooms.push(newUser);
});

app.use(router);

server.listen(PORT, () => {
    console.log(`server se pokreno na portu ${PORT}`);
});