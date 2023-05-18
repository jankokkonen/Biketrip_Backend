const express = require('express');

const getDeparturesController = require('../controllers/getBikeDepartures');

const router = express.Router();

router.get('/', getDeparturesController.fetchDepartures);

module.exports = router;