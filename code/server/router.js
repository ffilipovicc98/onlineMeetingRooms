const express = require('express');
const router = express.Router();
const cors = require('cors');

const rooms = [
    {
        roomName: 'MATF - Računarske mreže vežbe',
        host: 'Ivan Ristović',
        roomID: 1,
    },
    {
        roomName: 'MATF - Računarske mreže predavanja',
        host: 'Aleksandar Kartelj',
        roomID: 2,
    },
    {
        roomName: 'MATF - Razvoj softvera vežbe',
        host: 'Nikola Ajzenhamer',
        roomID: 3,
    },
    {
        roomName: 'JavaScript Workshop',
        host: 'Wes Bos',
        roomID: 4,
    },
    {
        roomName: 'RM Odbrana projekta',
        host: 'Filip Filipovic',
        roomID: 5,
    },
];

router.get('/', cors(), (req, res) => {
    const poruka = 'server dobio zahtev';
    console.log(poruka);
    res.send(rooms);
});

module.exports = router;
