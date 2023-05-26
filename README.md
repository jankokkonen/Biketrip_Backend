# BikeTripBackend API - Dokumentaatio

BikeTrip_backend on toteutettu RESTful API -palveluna.

BikeTrip_backend-projektissa olen valinnut Node.js:n backendin toteutuskielenä, koska se tarjoaa nopean ja suorituskykyisen ympäristön yhdessä Angularin kanssa.

Node.js on hyvä valinta Angularin kanssa, koska molemmat käyttävät JavaScriptiä. Tämä yhtenäisyys mahdollistaa tehokkaan koodin jakamisen frontendin ja backendin välillä.

Valitsin PostgreSQL BikeTrip_backend-projektin tietokantaratkaisuksi, koska se on tehokas ja suorituskykyinen avoimen lähdekoodin relaatiotietokanta. Se on suunniteltu käsittelemään suuria tietomääriä ja suorittamaan monimutkaisia kyselyitä tehokkaasti.

## Asennus

## Routes

### getTrips

Palauttaa Helsingin kaupunkipyörien reittien tiedot.

### getStations

Palauttaa Helsingin kaupunkipyörien asemien tiedot.

### getBikeReturns

Palauttaa tiedon montako kertaa pyörä on palautettu asemalle.

### getBikeDepartures

Palauttaa tiedon montako kertaa pyörä on lähtenyt asemalle.

### getStationsBySearch

Palauttaa asemahaun tulokset.

## Controllers

Kontrollerit hyödyntävät malleja(models) tietojen hakemiseen tietokannasta. 

Kontrollerit käyttävät model.fetchStations-metodia asemien hakemiseen ja odottaa vastauksena rows-muuttujaa, joka sisältää haetut tiedot. Onnistuneen haun tapauksessa tiedot palautetaan JSON-muodossa vastauksena.

Virheen sattuessa kontrolleri tulostaa virheen konsoliin ja palauttaa virheilmoituksen JSON-muodossa vastauksena.

### getTrips.js

getTrips.js-tiedosto sisältää toiminnallisuuden pyöräreittitietojen hakemiseen.

Reittien hakemisessa tietokannasta on käytetty parametreja haun rajoittamiseksi, 
johtuen tietokannan suuresta tietomäärästä.

Parametrit:
(limit, offset): Hakee kaupunkipyörämatkojen tiedot tietokannasta rajoittaen hakutulosten määrää (limit) ja määrittäen haun aloituskohteen (offset).

### getStations.js

getStations.js-tiedosto sisältää toiminnallisuuden asemien tietojen hakemiseen.

Asemien hakemisessa tietokannasta on käytetty parametreja haun rajoittamiseksi, 
johtuen tietokannan suuresta tietomäärästä. 

Parametrit:
(limit, offset): Hakee kaupunkipyöräasemien tiedot tietokannasta rajoittaen hakutulosten määrää (limit) ja määrittäen haun aloituskohteen (offset).

### getBikeReturns

getBikeReturns.js sisältää toiminnallisuuden pyörien asemalle palautuksien lukumäärän tietojen hakemiseen.

### getBikeDepartures

getBikeDepartures.js sisältää toiminnallisuuden pyörien asemalta lähtevien lukumäärän tietojen hakemiseen.

### getStationsBySearch

getStationsBySearch.js käyttää searchText: Hakutekstiä, jota käytetään asemien nimen osittaiseen hakemiseen.
Hakuteksti muunnetaan pieniksi kirjaimiksi (toLowerCase()) varmistaakseen hakemisen oikeellisuuden.

## Models

Mallit vastaavat tietojen käsittelystä. Metodit suorittavat SQL-kyselyitä tietokantaan ja
palauttavat Promise-objektin, joka sisältää kyselyn tuloksen.

### getStation

Vastaa Helsingin kaupunkipyöräasemien tietojen käsittelystä tietokannassa.

fetchStations(limit, offset): Hakee kaupunkipyöräasemien tiedot tietokannasta rajoittaen hakutulosten määrää (limit) ja määrittäen haun aloituskohteen (offset).

fetchStationsBySearch(searchText): Hakee kaupunkipyöräasemat hakutekstin perusteella. Hakutekstiä verrataan aseman nimeen (käyttäen ILIKE-lauseketta, joka sallii osittaiset osumat).


### getTrip

fetchTrips(limit, offset): Hakee pyöräreittien tiedot tietokannasta rajoittaen hakutulosten määrää (limit) ja määrittäen haun aloituskohteen (offset).

### getBikeReturn

fetchReturns(stationName): Hakee palautuneiden pyörien lukumäärän tietyn aseman perusteella. Parametri stationName määrittää aseman nimen, jonka perusteella haetaan. Palauttaa Promise-objektin.

### getBikeDeparture

fetchDepartures(stationName): Hakee lähteneiden pyörien lukumäärän tietyn aseman perusteella. Parametri stationName määrittää aseman nimen, jonka perusteella haetaan. Palauttaa Promise-objektin.

## Database & config

Tämä moduuli luo yhteyden PostgreSQL-tietokantaan ja tarjoaa toiminnallisuuden tietokantakyselyjen suorittamiseen. Testataan myös tietokantayhteys samalla.

config.json tiedosto sisältää konfiguraatiotiedot PostgreSQL-tietokantayhteyden muodostamiseksi.
