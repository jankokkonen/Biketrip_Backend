const express = require('express');

const getTripsController = require('../controllers/getTrips');

const router = express.Router();

router.get('/', getTripsController.fetchTrips);

module.exports = router;