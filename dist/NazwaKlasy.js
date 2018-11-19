"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NazwaKlasy = /** @class */ (function () {
    function NazwaKlasy(name) {
        this.tablica = [];
        this.prywatna = 10;
        this.zmienna = "";
        this._manager = 'Jan Kowalski';
        this.id = NazwaKlasy.id++;
        this.name = name;
    }
    Object.defineProperty(NazwaKlasy.prototype, "manager", {
        get: function () {
            return this._manager;
        },
        set: function (manager) {
            this._manager = manager;
        },
        enumerable: true,
        configurable: true
    });
    NazwaKlasy.prototype.metoda = function (parametr) {
        this.tablica.push(parametr);
    };
    NazwaKlasy.prototype.isPrywatnaTen = function () {
        return this.tablica.length > this.prywatna;
    };
    NazwaKlasy.id = 0;
    return NazwaKlasy;
}());
exports.default = NazwaKlasy;
