import { Klasa } from './Klasa.model'

export interface Interfejs {
    tablica: Klasa[] ;
    metoda(klasa: Klasa): void;
}