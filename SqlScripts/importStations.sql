DROP TABLE IF EXISTS stations;

CREATE TABLE stations (
    ID INTEGER PRIMARY KEY,
    station_id integer,
    nimi TEXT,
    namn TEXT,
    name TEXT,
    osoite TEXT,
    adress TEXT,
    Kaupunki TEXT,
    stad TEXT,
    operaattori TEXT,
    kapasiteetti INTEGER,
    x FLOAT,
    y FLOAT
);

COPY stations(ID, station_id, nimi, namn, name, osoite, adress, kaupunki, stad, operaattori, kapasiteetti, x, y)
FROM '/Users/s2200697/Desktop/Data/asemat_info.csv' WITH (FORMAT csv, DELIMITER ',', HEADER true);