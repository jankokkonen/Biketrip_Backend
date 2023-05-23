const express = require('express');
const bodyParser = require('body-parser');

const getRoutes = require('./routes/getRoutes')

const app = express();
const ports = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', getRoutes);

app.listen(ports, () => console.log(`listening on port ${ports}`));