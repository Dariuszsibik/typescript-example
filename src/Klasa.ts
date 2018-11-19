import NazwaKlasy from './NazwaKlasy'

export default class Klasa extends NazwaKlasy {
    constructor(name, public boolean) {
        super(name, )
    }
    abstractMethod() {
        return 'przeciążenie metody abstrakcyjnej'
    }
}