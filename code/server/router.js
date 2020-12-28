// const express = require('express');
// const bodyParser = require('body-parser');
// const router = express.Router();
// const cors = require('cors');

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

// router.get('/rooms', (req, res) => {
//     res.send(rooms);
// });

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

// module.exports = router;
