const db = require('../db/database');

module.exports = class Stations {
    constructor(
        station_id, 
        nimi, 
        namn, 
        name, 
        osoite, 
        adress, 
        kaupunki, 
        stad,
        operaattori,
        kapasiteetti,
        x,
        y
        ){
            this.station_id = station_id;
            this.nimi = nimi;
            this.namn = namn;
            this.name = name;
            this.osoite = osoite;
            this.adress = adress;
            this.kaupunki = kaupunki;
            this.stad = stad;
            this.operaattori = operaattori;
            this.kapasiteetti = kapasiteetti;
            this.x = x;
            this.y = y;
        }

        static async fetchStations(limit, offset) {
            const query = {
                text: `SELECT * FROM stations LIMIT $1 OFFSET $2`,
                values: [limit, offset]
            };
            return db.query(query);
        }

        static fetchStationsBySearch = async (searchText) => {
            const query = {
                text: 'SELECT * FROM stations WHERE nimi ILIKE $1 || \'%\'',
                values: [searchText],
            };
            return db.query(query);
        }
}