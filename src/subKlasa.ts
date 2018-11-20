import NazwaKlasy from './NazwaKlasy'
import { Klasa, Status } from "./Klasa.model"

interface Skasowany {
    skasowany: boolean;
}

function subKlasaCreate(target: Function) {
    console.log("subKlasa has been created...")
}

function ClosedAtNigth<T extends {new(...args: any[]):{}}>(constructor: T){
    return class extends constructor {
        openAtNight = false;
    }
}

function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
        propertyDescriptor.enumerable = value;
    }
}

@ClosedAtNigth
@subKlasaCreate
export default class subKlasa extends NazwaKlasy {
    constructor(name: string, public boolean: boolean) {
        super(name, )
    }

    metoda(klasa: Klasa & Skasowany) {
        this.tablica.push(klasa);
    }

    @enumerable(false)
    abstractMethod(): string {
        return 'przeciążenie metody abstrakcyjnej';
    }

    
}