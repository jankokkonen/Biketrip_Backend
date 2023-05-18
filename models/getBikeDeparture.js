const db = require('../db/database');

module.exports = class Trips {
    constructor(
        bike_departure, 
        bike_return, 
        departure_station_id, 
        departure_station_name, 
        return_station_id, 
        return_station_name, 
        covered_distance_m, 
        duration_sec
        ){
            this.bike_departure = bike_departure;
            this.bike_return = bike_return;
            this.departure_station_id = departure_station_id;
            this.departure_station_name = departure_station_name;
            this.return_station_id = return_station_id;
            this.return_station_name = return_station_name;
            this.covered_distance_m = covered_distance_m;
            this.duration_sec = duration_sec;
        }

        static fetchDepartures = async (stationName) => {
            const query = {
                text: 'SELECT COUNT(*) FROM trips WHERE departure_station_name = $1',
                values: [stationName],
            };
            return db.query(query);
        }
}