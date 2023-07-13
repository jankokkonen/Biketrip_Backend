# BikeTripBackend API - Dokumentaatio

https://github.com/solita/dev-academy-2023-exercise

BikeTrip_backend on toteutettu RESTful API -palveluna.

BikeTrip_backend-projektissa olen valinnut Node.js:n backendin toteutuskielenä, koska se tarjoaa nopean ja suorituskykyisen ympäristön yhdessä Angularin kanssa.

Node.js on hyvä valinta Angularin kanssa, koska molemmat käyttävät JavaScriptiä. Tämä yhtenäisyys mahdollistaa tehokkaan koodin jakamisen frontendin ja backendin välillä.

Valitsin PostgreSQL BikeTrip_backend-projektin tietokantaratkaisuksi, koska se on tehokas ja suorituskykyinen avoimen lähdekoodin relaatiotietokanta. Se on suunniteltu käsittelemään suuria tietomääriä ja suorittamaan monimutkaisia kyselyitä tehokkaasti.

## Asennus

Lisää .csv tiedostot backend_biketrips/data kansioon ja korjaa docker-compose.yml volumes kohdasta polku oikein, 
jotta tiedostot saadaan Dockerkonttiin.

Yritin saada automatisoitua niin että sql kyselyt ajetaan docker-composessa, mutta en ole onnistunut siinä vielä.

Tiedostojen ajaminen tietokantaan tapahtuu komentoriviltä:

Kirjaudu Dockeriin postgres kontin id:llä:

docker exec -it <Dockerkontin id> bash

Tämän jälkeen kirjaudu postgres:

psql -U janne postgres

Yhdistä tietokantaan:

\c biketrips

Suorita SQL lauseet:

\COPY stations(ID, station_id, nimi, namn, name, osoite, adress, kaupunki, stad, operaattori, kapasiteetti, x, y) FROM '/Biketrip_Backend/data/Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat_avoin.csv' WITH (FORMAT csv, DELIMITER ',', HEADER true);

\COPY trips(bike_departure, bike_return, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_m, duration_sec) FROM '/Biketrip_Backend/data/2021-05.csv' WITH (FORMAT csv, DELIMITER ',', HEADER true) WHERE covered_distance_m >= 10 AND duration_sec >= 10;

\COPY trips(bike_departure, bike_return, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_m, duration_sec) FROM '/Biketrip_Backend/data/2021-06.csv' WITH (FORMAT csv, DELIMITER ',', HEADER true) WHERE covered_distance_m >= 10 AND duration_sec >= 10;

\COPY trips(bike_departure, bike_return, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_m, duration_sec) FROM '/Biketrip_Backend/data/2021-07.csv' WITH (FORMAT csv, DELIMITER ',', HEADER true) WHERE covered_distance_m >= 10 AND duration_sec >= 10;

