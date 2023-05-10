const express = require('express');

const getStationsController = require('../controllers/getStations');

const router = express.Router();

router.get('/', getStationsController.fetchStations);

module.exports = router;