const stationsModel = require('../models/getStation');

const db = require('../db/database');

exports.fetchStations = async (req, res, next) => {
    try {
        const {rows} = await stationsModel.fetchStations();
        console.log(rows);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}