const tripsModel = require('../models/getTrip');

const db = require('../db/database');

exports.fetchTrips = async (req, res, next) => {
    try {
        const {rows} = await tripsModel.fetchTrips(req.query.limit, req.query.offset);
        console.log(rows);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}