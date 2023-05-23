const stationsModel = require('../models/getStation');

exports.fetchStationsBySearch = async (req, res, next) => {
    try {
        const searchText = req.query.searchText; 
        const { rows } = await stationsModel.fetchStationsBySearch(searchText); 
        // console.log(rows);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}