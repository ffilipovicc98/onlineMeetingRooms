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
        methods: ['GET', 'POST'],
    },
});
app.use(cors());
// app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));
// app.use(bodyParser.urlencoded({ extended: true }));

class User {
    constructor(socket, roomID, peerID, isAudioEnabled, isVideoEnabled) {
        this.socket = socket;
        this.userID = socket.id;
        this.userName = undefined;
        this.roomID = roomID;
        this.isCurrentUserHost = undefined;
        this.peerID = peerID;
        this.isAudioEnabled = isAudioEnabled;
        this.isVideoEnabled = isVideoEnabled;
    }

    setUserName(value) {
        this.userName = value;
    }

    setIsCurrentUserHost(value) {
        this.isCurrentUserHost = value;
    }

    setIsAudioEnabled(value) {
        this.isAudioEnabled = value;
    }

    setIsVideoEnabled(value) {
        this.isVideoEnabled = value;
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
        if (!this.rooms.has(roomID)) {
            this.rooms.set(roomID, new Room(roomID, roomName, hostName));
        } else {
            console.log('Greska addRoom Vec postoji soba sa tim roomID-em.');
        }
    }

    removeRoom(roomID) {
        if (this.rooms.has(roomID)) {
            const room = this.rooms.get(roomID);
            for (let [userID, user] of room.users) {
                this.removeUser(userID);
            }
        } else {
            console.log('Greska removeRoom Ne postoji soba sa tim roomID-em.');
        }
    }

    addUser({
        socket,
        userName,
        isCurrentUserHost,
        roomName,
        roomID,
        hostName,
        peerID,
        isAudioEnabled,
        isVideoEnabled,
    }) {
        const userID = socket.id;
        if (!this.rooms.has(roomID) && isCurrentUserHost) {
            this.addRoom(roomID, roomName, hostName);
        }

        if (!this.users.has(userID)) {
            const user = new User(
                socket,
                roomID,
                peerID,
                isAudioEnabled,
                isVideoEnabled
            );
            user.setUserName(userName);
            user.setIsCurrentUserHost(isCurrentUserHost);
            user.socket.join(roomID);
            this.users.set(userID, user);
            if (this.rooms.has(roomID)) {
                this.rooms.get(roomID).users.set(userID, user);
                this.sendRoomDataToClient(socket, this.rooms.get(roomID));
                if (!user.isCurrentUserHost) {
                    this.sendInfoAboutNewUserToOtherUsersInRoom(user);
                }
            } else {
                console.log('Greska addUser Ne postoji soba sa tim roomID-em.');
            }
        } else {
            console.log(
                'Greska addUser Vec postoji korisnik sa tim userID-em.'
            );
        }
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
                peerID: user.peerID,
                isAudioEnabled: user.isAudioEnabled,
                isVideoEnabled: user.isVideoEnabled,
            })),
            messages: room.messages,
        });
    }

    sendInfoAboutNewUserToOtherUsersInRoom(user) {
        user.socket.to(user.roomID).emit('newUser', {
            userName: user.userName,
            userID: user.userID,
            isHost: user.isCurrentUserHost,
            peerID: user.peerID,
            isAudioEnabled: user.isAudioEnabled,
            isVideoEnabled: user.isVideoEnabled,
        });
    }

    removeUser(userID) {
        if (this.users.has(userID)) {
            const user = this.users.get(userID);
            let shouldRemoveRoom = false;
            if (user.isCurrentUserHost) {
                shouldRemoveRoom = true;
            }
            user.socket.leave(user.roomID);
            if (this.rooms.has(user.roomID)) {
                const usersInRoom = this.rooms.get(user.roomID).users;
                if (usersInRoom.has(userID)) {
                    usersInRoom.delete(userID);
                } else {
                    console.log(
                        'Greska removeUser Ne mogu da obrisem korisnika sa tim ID-em jer nije dodeljen sobi sa tim ID-em.'
                    );
                }

                const allUsersOnServer = this.users;
                if (allUsersOnServer.has(userID)) {
                    this.users.delete(userID);
                } else {
                    console.log(
                        'Greska removeUser Ne mogu da obrisem korisnika sa tim ID-em jer ne postoji na serveru.'
                    );
                }

                if (shouldRemoveRoom) {
                    user.socket.to(user.roomID).emit('meetingEnded');
                    if (this.rooms.has(user.roomID)) {
                        this.rooms.delete(user.roomID);
                    } else {
                        console.log(
                            'Greska removeUser Ne mogu da obrisem sobu sa tim ID-em jer ne postoji na serveru.'
                        );
                    }
                } else {
                    user.socket.to(user.roomID).emit('userLeft', {
                        userName: user.userName,
                        userID: user.userID,
                        isHost: user.isCurrentUserHost,
                    });
                }
            }
        } else {
            console.log(
                'Greska removeUser Ne postoji korisnik sa tim userID-em.'
            );
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
    // console.log(`Imamo korisnika ${socket.id}`);

    socket.on('disconnect', () => {
        // console.log(`Ode jedan korisnik ${socket.id}`);
        appLogic.removeUser(socket.id);
    });

    socket.on('leave', () => {
        appLogic.removeUser(socket.id);
    });

    socket.on('join', (userData, callback) => {
        appLogic.addUser({ socket, ...userData });
    });

    socket.on('sendMessageToServer', ({ userID, content }) => {
        if (appLogic.users.has(userID)) {
            const user = appLogic.users.get(userID);
            if (appLogic.rooms.has(user.roomID)) {
                const room = appLogic.rooms.get(user.roomID);
                const message = new Message(userID, content);
                room.messages.push(message);
                io.in(room.roomID).emit('sendMessageToUsersInRoom', message);
            }
        }
    });

    socket.on('audioSettingsChanged', ({ value }) => {
        if (!appLogic.users.has(socket.id)) {
            return;
        }
        const user = appLogic.users.get(socket.id);
        user.setIsAudioEnabled(value);
        if (!appLogic.rooms.has(user.roomID)) {
            return;
        }
        const room = appLogic.rooms.get(user.roomID);
        io.in(user.roomID).emit('otherUserChangedAudioSettings', {
            userID: user.userID,
            isAudioEnabled: user.isAudioEnabled,
        });
    });

    socket.on('videoSettingsChanged', ({ value }) => {
        if (!appLogic.users.has(socket.id)) {
            return;
        }
        const user = appLogic.users.get(socket.id);
        user.setIsVideoEnabled(value);
        if (!appLogic.rooms.has(user.roomID)) {
            return;
        }
        const room = appLogic.rooms.get(user.roomID);
        io.in(user.roomID).emit('otherUserChangedVideoSettings', {
            userID: user.userID,
            isVideoEnabled: user.isVideoEnabled,
        });
    });
});

// setInterval(() => {
//     console.log(appLogic);
// }, 5000);

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

// router.post('/rooms', (req, res) => {
//     console.log('POST');
//     console.log(req.body);
//     const newUser = {
//         roomName: 'RM Odbrana projekta',
//         host: 'Filip Filipovic',
//         roomID: 5,
//     };
//     rooms.push(newUser);
// });

app.use(router);

server.listen(PORT, () => {
    console.log(`server se pokreno na portu ${PORT}`);
});
