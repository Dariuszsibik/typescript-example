import { Interfejs } from "./Interfejs";
import { Klasa, Status, Rozmiar, SizeKey, PaymentMethod} from './Klasa.model'

export default abstract class NazwaKlasy implements Interfejs{
    static id = 0;
    id: number;
    readonly name: string;
    tablica: Klasa[] = [];
    private prywatna = 10;
    protected zmienna: string = "";
    private _manager = 'Jan Kowalski';

    constructor(name: string) {
        this.id = NazwaKlasy.id++;
        this.name = name;
    }

    get manager() {
        return this._manager;
    }

    set manager(manager) {
        this._manager = manager;
    }

    metoda(klasa: Klasa) {
        this.tablica.push(klasa)
    }

    zmianaStatus(index: number, status: Status) {
        this.tablica[index].status = status;
    }

    zmianaRozmiaru(index: number, size: SizeKey) {
        this.tablica[index].size = size;
    }

    sprawdzCene( {price}: Klasa ) {
        if (typeof price === 'string') {
            console.log('price is string')
        } else if (typeof price === 'number') {
            console.log('price jest number')
        }
    }

    getPaymentMethod(payment: PaymentMethod) {
        switch(payment.type) {
            case 'cash': return `Paid in cash in ${payment.currency}`
            case 'debitCard': return `Paid in debit card with code ${payment.code}`
            case 'onlinePayment': return `Paid online, with banAccount ${payment.bankAccount}`
        }
    }

    private isPrywatnaTen() {
        return this.tablica.length > this.prywatna;
    }

    abstract abstractMethod(): void
}