const express = require('express');
const bodyParser = require('body-parser');

const getTripsRoutes = require('./routes/getTrips')
const getStationsRoutes = require('./routes/getTrips')
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

app.use('/get', getTripsRoutes);
app.use('/get', getStationsRoutes);

// app.use(errorController);

app.listen(ports, () => console.log(`listening on port ${ports}`));