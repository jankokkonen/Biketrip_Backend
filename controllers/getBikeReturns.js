const returnsModel = require('../models/getBikeReturn');

exports.fetchReturns = async (req, res, next) => {
    try {
        const stationName = req.query.stationName; 
        const { rows } = await returnsModel.fetchReturns(stationName); 
        // console.log(rows);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}