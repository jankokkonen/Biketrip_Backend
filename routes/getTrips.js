const express = require('express');

// const getTripsController = require();

const router = express.Router();

router.get('/', getTripsController.fetchAll);

module.exports = router;