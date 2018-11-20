import Klasa from './subKlasa'
import NazwaKlasy from './NazwaKlasy'
import { Status, Rozmiar } from './Klasa.model'

const obiekt1 = new Klasa('test', true);
const obiekt2 = new Klasa('test', false);

const obiektTestowy = {
    name: 'Nazwa',
    price: '20zł',
    size: 'large',
    status: Status.Zainicjowana,
    skasowany: true
}

obiekt1.metoda(obiektTestowy)
//obiekt1.zmianaStatus(1, 2)
//obiekt1.zmianaRozmiaru(1, 'large');

console.log(obiekt1, obiekt2)
