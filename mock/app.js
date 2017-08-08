const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.get('/api/sso/affiliation/:session', (req, res) => {
    const affiliation = {
        alliance_id: 0,
        character_id: 0,
        corporation_id: 0
    };

    res.json(affiliation);
});

app.get('/api/contracts', (req, res) => {
    const mockContract = require('./data/contract.json');
    res.send([mockContract, mockContract]);
});

app.get('/api/contracts/:id', (req, res) => {
    const mockContract = require('./data/contract.json');
    res.send(mockContract);
});

app.listen(9999, function () {
    console.log('Mock server is listening on port 9999!');
});
