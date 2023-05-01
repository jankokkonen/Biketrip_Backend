// const tripsModel = require('../models/getTrip');

// const db = require('');

exports.fetchAll = async (req, res, next) => {
    try {
        const { rows } = await db.query('SELECT * FROM trips');
        res.status(200).json(rows);
    } catch (err) {
        
    }
}