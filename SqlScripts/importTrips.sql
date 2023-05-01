DROP TABLE IF EXISTS trips;

CREATE TABLE trips (
    bike_departure TIMESTAMP,
    bike_return TIMESTAMP,
    departure_station_id INTEGER,
    departure_station_name TEXT,
    return_station_id INTEGER,
    return_station_name TEXT,
    covered_distance_m DECIMAL(10,2),
    duration_sec DECIMAL(10,2)
);

COPY trips(bike_departure, bike_return, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_m, duration_sec)
FROM '/Users/s2200697/Desktop/Data/2021-05.csv' WITH (FORMAT csv, DELIMITER ',', HEADER true)
WHERE covered_distance_m >= 10 AND duration_sec >= 10;

COPY trips(bike_departure, bike_return, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_m, duration_sec)
FROM '/Users/s2200697/Desktop/Data/2021-06.csv' WITH (FORMAT csv, DELIMITER ',', HEADER true)
WHERE covered_distance_m >= 10 AND duration_sec >= 10;

COPY trips(bike_departure, bike_return, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_m, duration_sec)
FROM '/Users/s2200697/Desktop/Data/2021-07.csv' WITH (FORMAT csv, DELIMITER ',', HEADER true)
WHERE covered_distance_m >= 10 AND duration_sec >= 10;
