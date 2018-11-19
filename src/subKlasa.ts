import NazwaKlasy from './NazwaKlasy'
import { Klasa, Status } from "./Klasa.model"

interface skasowany {
    skasowany: boolean;
}
export default class subKlasa extends NazwaKlasy {
    constructor(name: string, public boolean: boolean) {
        super(name, )
    }

    metoda(klasa: Klasa & skasowany) {
        this.tablica.push(klasa);
    }

    abstractMethod(): string {
        return 'przeciążenie metody abstrakcyjnej'
    }

    
}