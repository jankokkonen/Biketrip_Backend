const express = require('express');
const bodyParser = require('body-parser');

// const getRoutes = require()
// const errorController = require()

const app = express();
const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// const pool = require()

// app.use('/get', getRoutes);

// app.use(errorController);

app.listen(ports, () => console.log(`listening on port ${ports}`));