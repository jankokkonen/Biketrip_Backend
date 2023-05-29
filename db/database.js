const { Pool } = require('pg');

const config = require('../config/config.json');

const pool = new Pool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
    port: config.port
});

pool.query("SELECT 1", (err, results) => {
    if (err) {
        console.log(err);
        console.log("Database connection unsuccessful");
    } else {
        console.log("Database connection successfull");
    }
});


const stationsTable = 'stations';
const tripsTable = 'trips'

const createStationsTableQuery =
    `DROP TABLE IF EXISTS ${stationsTable};
    CREATE TABLE ${stationsTable} (
        ID INTEGER PRIMARY KEY,
        station_id integer,
        nimi TEXT,
        namn TEXT,
        name TEXT,
        osoite TEXT,
        adress TEXT,
        kaupunki TEXT,
        stad TEXT,
        operaattori TEXT,
        kapasiteetti INTEGER,
        x FLOAT,
        y FLOAT
      );`
    ;

const createTripsTableQuery = 
    `DROP TABLE IF EXISTS ${tripsTable};
    CREATE TABLE ${tripsTable} (
        bike_departure TIMESTAMP,
        bike_return TIMESTAMP,
        departure_station_id INTEGER,
        departure_station_name TEXT,
        return_station_id INTEGER,
        return_station_name TEXT,
        covered_distance_m DECIMAL(10,2),
        duration_sec DECIMAL(10,2)
    );`
;


pool.query(createStationsTableQuery, (err, res) => {
    if (err) {
    console.error('Error creating stations table:', err);
    } else {
    console.log('Stations table created successfully!');
    }
});

pool.query(createTripsTableQuery, (err, res) => {
    if (err) {
    console.error('Error creating trips table:', err);
    } else {
    console.log('Trips table created successfully!');
    }
});



        // if (fs.existsSync(csvFilePath)) {
        //     const readStream = fs.createReadStream(csvFilePath);
        //     const client = await pool.connect();

        //     try {
        //         const copyQuery = `COPY ${tableName}(ID, station_id, nimi, namn, name, osoite, adress, kaupunki, stad, operaattori, kapasiteetti, x, y) FROM STDIN DELIMITER ',' CSV HEADER`;
        //         const stream = client.query(copyQuery);

        //         await new Promise((resolve, reject) => {
        //             stream.on('end', resolve);
        //             stream.on('error', reject);
        //             readStream.pipe(stream);
        //         });

        //         console.log('CSV imported successfully');
        //         client.release();
        //         pool.end();
        //     } catch (error) {
        //         console.error('Error importing CSV:', error);
        //         client.release();
        //         pool.end();
        //     }
        // } else {
        //     console.error('Tiedosto ei ole olemassa:', csvFilePath);
        //     pool.end();
        // }

module.exports = pool;