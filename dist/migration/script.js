"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countries_1 = require("./countries");
var filterCountriesByArea = function () { return countries_1.countries.filter(function (_a) {
    var area = _a.area;
    return area < 30000 || area > 100000;
}); };
var filterCountriesFromEurope = function () { return countries_1.countries.filter(function (_a) {
    var region = _a.region;
    return region === 'Europe';
}); };
var filterCapitalByLetter = function (letter) { return function (country) { return country.capital.startsWith(letter); }; };
var getCountriesExtendedInfo = function () {
    return countries_1.countries.map(function (_a) {
        var name = _a.name, borders = _a.borders, timezones = _a.timezones;
        return {
            name: name,
            neighbors: borders.length > 0 ? borders.join(' ') : 'NONE',
            timezoneInfo: "Strefa czasowa " + timezones.join()
        };
    });
};
var getCountriesShortInfo = function () { return countries_1.countries.map(function (_a) {
    var name = _a.name, population = _a.population;
    return name + " ma powierzchni\u0119 country.area km2 a populacja wynosi " + population;
}); };
var getTotalPopulation = function () { return countries_1.countries.reduce(function (acc, next) { return acc + next.population; }, 0); };
var getPolishNeighborsPopulation = function () {
    return countries_1.countries
        .filter(function (_a) {
        var borders = _a.borders;
        return borders.includes('POL');
    })
        .reduce(function (acc, next) { return acc + next.population; }, 0);
};
var countriesByArea = filterCountriesByArea();
var countriesFromEurope = filterCountriesFromEurope();
var countriesWhereCapitalStartsWithF = countries_1.countries.filter(filterCapitalByLetter('F'));
var countriesWithExtendedInfo = getCountriesExtendedInfo();
var countriesWithShortInfo = getCountriesShortInfo();
var totalPopulation = getTotalPopulation();
var polishNeighborsPopulation = getPolishNeighborsPopulation();
