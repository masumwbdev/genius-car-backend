const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Running genius server');
});

app.listen(port, () => {
    console.log('Running genius server on port', port)
});