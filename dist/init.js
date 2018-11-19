"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Klasa_1 = __importDefault(require("./Klasa"));
var obiekt1 = new Klasa_1.default('test', true);
var obiekt2 = new Klasa_1.default('test', false);
console.log(obiekt1, obiekt2);
