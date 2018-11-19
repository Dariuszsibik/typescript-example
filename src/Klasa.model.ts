

export interface Klasa {
    name: string;
    price: number | string;
    size: string;
    status: number;
}

export enum Status {
    Zainicjowana, // 0
    Niezainicjowana, // 1
    Czeka // 2
}

export enum Rozmiar {
    small = 'small',
    medium = 'medium',
    large = 'large'

}

export interface Cash {
    type: 'cash',
    currency: string
}

export interface DebitCard {
    type: 'debitCard',
    code: string;
}

export interface OnlinePayment {
    type: 'onlinePayment',
    bankAccount: number;
}

export type PaymentMethod = Cash | DebitCard | OnlinePayment;

export type SizeKey = keyof typeof Rozmiar;