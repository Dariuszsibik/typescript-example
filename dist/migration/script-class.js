"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countries_1 = require("./countries");
var CountriesInformation = /** @class */ (function () {
    function CountriesInformation() {
        this.countriesFromEurope = this.filterCountriesFromEurope();
        this.countriesWhereCapitalStartsWithF = countries_1.countries.filter(this.filterCapitalByLetter('F'));
        this.countriesWithExtendedInfo = this.getCountriesExtendedInfo();
        this.countriesWithShortInfo = this.getCountriesShortInfo();
        this.totalPopulation = this.getTotalPopulation();
        this.polishNeighborsPopulation = this.getPolishNeighborsPopulation();
        this.filterCountriesByArea();
    }
    CountriesInformation.prototype.filterCountriesByArea = function () {
        this.countriesByArea = countries_1.countries.filter(function (_a) {
            var area = _a.area;
            return area < 30000 || area > 100000;
        });
    };
    CountriesInformation.prototype.filterCountriesFromEurope = function () {
        return countries_1.countries.filter(function (_a) {
            var region = _a.region;
            return region === 'Europe';
        });
    };
    CountriesInformation.prototype.filterCapitalByLetter = function (letter) {
        return function () { return function (country) { return country.capital.startsWith(letter); }; };
    };
    CountriesInformation.prototype.getCountriesExtendedInfo = function () {
        return countries_1.countries.map(function (_a) {
            var name = _a.name, borders = _a.borders, timezones = _a.timezones;
            return {
                name: name,
                neighbors: borders.length > 0 ? borders.join(' ') : 'NONE',
                timezoneInfo: "Strefa czasowa " + timezones.join()
            };
        });
    };
    CountriesInformation.prototype.getCountriesShortInfo = function () {
        return countries_1.countries.map(function (_a) {
            var name = _a.name, population = _a.population;
            return name + " ma powierzchni\u0119 country.area km2 a populacja wynosi " + population;
        });
    };
    CountriesInformation.prototype.getTotalPopulation = function () {
        return countries_1.countries.reduce(function (acc, next) { return acc + next.population; }, 0);
    };
    CountriesInformation.prototype.getPolishNeighborsPopulation = function () {
        return countries_1.countries
            .filter(function (_a) {
            var borders = _a.borders;
            return borders.includes('POL');
        })
            .reduce(function (acc, next) { return acc + next.population; }, 0);
    };
    return CountriesInformation;
}());
exports.CountriesInformation = CountriesInformation;
var countriesInformation = new CountriesInformation();
