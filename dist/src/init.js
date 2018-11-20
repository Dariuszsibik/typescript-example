"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var subKlasa_1 = __importDefault(require("./subKlasa"));
var Klasa_model_1 = require("./Klasa.model");
var obiekt1 = new subKlasa_1.default('test', true);
var obiekt2 = new subKlasa_1.default('test', false);
var obiektTestowy = {
    name: 'Nazwa',
    price: '20zł',
    size: 'large',
    status: Klasa_model_1.Status.Zainicjowana,
    skasowany: true
};
obiekt1.metoda(obiektTestowy);
//obiekt1.zmianaStatus(1, 2)
//obiekt1.zmianaRozmiaru(1, 'large');
console.log(obiekt1, obiekt2);
