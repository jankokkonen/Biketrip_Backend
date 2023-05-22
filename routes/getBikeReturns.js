const express = require('express');

const getReturnsController = require('../controllers/getBikeReturns');

const router = express.Router();

router.get('/', getReturnsController.fetchReturns);

module.exports = router;