export default abstract class NazwaKlasy {
    static id = 0;
    id;
    readonly name;
    private tablica = [];
    private prywatna = 10;
    protected zmienna = "";
    private _manager = 'Jan Kowalski';

    constructor(name) {
        this.id = NazwaKlasy.id++;
        this.name = name;
    }

    get manager() {
        return this._manager;
    }

    set manager(manager) {
        this._manager = manager;
    }

    metoda(parametr) {
        this.tablica.push(parametr)
    }

    private isPrywatnaTen() {
        return this.tablica.length > this.prywatna;
    }

    abstract abstractMethod()
}