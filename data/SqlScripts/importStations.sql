DROP TABLE IF EXISTS stations;

CREATE TABLE stations (
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
);

\COPY stations(ID, station_id, nimi, namn, name, osoite, adress, kaupunki, stad, operaattori, kapasiteetti, x, y) FROM 'C:\Users\janko\OneDrive\Työpöytä\Projects\Biketrip\Csv_files\stations.csv' WITH (FORMAT csv, DELIMITER ',', HEADER true, encoding 'utf8');