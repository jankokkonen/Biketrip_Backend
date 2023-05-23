const express = require('express');

const getTripsController = require('../controllers/getTrips');
const getStationsController = require('../controllers/getStations');
const getReturnsController = require('../controllers/getBikeReturns');
const getDeparturesController = require('../controllers/getBikeDepartures');

const router = express.Router();

router.get('/getTrips', getTripsController.fetchTrips);
router.get('/getStations', getStationsController.fetchStations);
router.get('/getBikeReturns', getReturnsController.fetchReturns);
router.get('/getBikeDepartures', getDeparturesController.fetchDepartures);

module.exports = router;