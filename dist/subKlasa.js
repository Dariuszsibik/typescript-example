"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NazwaKlasy_1 = __importDefault(require("./NazwaKlasy"));
function subKlasaCreate(target) {
    console.log("subKlasa has been created...");
}
function ClosedAtNigth(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.openAtNight = false;
            return _this;
        }
        return class_1;
    }(constructor));
}
function enumerable(value) {
    return function (target, propertyKey, propertyDescriptor) {
        propertyDescriptor.enumerable = value;
    };
}
var subKlasa = /** @class */ (function (_super) {
    __extends(subKlasa, _super);
    function subKlasa(name, boolean) {
        var _this = _super.call(this, name) || this;
        _this.boolean = boolean;
        return _this;
    }
    subKlasa.prototype.metoda = function (klasa) {
        this.tablica.push(klasa);
    };
    subKlasa.prototype.abstractMethod = function () {
        return 'przeciążenie metody abstrakcyjnej';
    };
    __decorate([
        enumerable(false)
    ], subKlasa.prototype, "abstractMethod", null);
    subKlasa = __decorate([
        ClosedAtNigth,
        subKlasaCreate
    ], subKlasa);
    return subKlasa;
}(NazwaKlasy_1.default));
exports.default = subKlasa;
