const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('Imamo korisnika');

    socket.on('disconnect', () => {
        console.log('Ode jedan korisnik');
    });
});

app.use(router);
// app.use(cors());

server.listen(PORT, () => {
    console.log(`server se pokreno na portu ${PORT}`);
});
