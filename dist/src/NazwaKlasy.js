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
    NazwaKlasy.prototype.metoda = function (klasa) {
        this.tablica.push(klasa);
    };
    NazwaKlasy.prototype.zmianaStatus = function (index, status) {
        this.tablica[index].status = status;
    };
    NazwaKlasy.prototype.zmianaRozmiaru = function (index, size) {
        this.tablica[index].size = size;
    };
    NazwaKlasy.prototype.sprawdzCene = function (_a) {
        var price = _a.price;
        if (typeof price === 'string') {
            console.log('price is string');
        }
        else if (typeof price === 'number') {
            console.log('price jest number');
        }
    };
    NazwaKlasy.prototype.getPaymentMethod = function (payment) {
        switch (payment.type) {
            case 'cash': return "Paid in cash in " + payment.currency;
            case 'debitCard': return "Paid in debit card with code " + payment.code;
            case 'onlinePayment': return "Paid online, with banAccount " + payment.bankAccount;
        }
    };
    NazwaKlasy.prototype.isPrywatnaTen = function () {
        return this.tablica.length > this.prywatna;
    };
    NazwaKlasy.id = 0;
    return NazwaKlasy;
}());
exports.default = NazwaKlasy;
