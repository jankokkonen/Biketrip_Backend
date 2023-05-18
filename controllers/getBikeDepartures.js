const departuresModel = require('../models/getBikeDeparture');

exports.fetchDepartures = async (req, res, next) => {
    try {
        const stationName = req.query.stationName; 
        const { rows } = await departuresModel.fetchDepartures(stationName); 
        console.log(rows);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}