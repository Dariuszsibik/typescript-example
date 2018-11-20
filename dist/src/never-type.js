"use strict";
var showError = function (message) {
    throw new Error(message);
}; // rzuca errora nie zwraca nic, typ never
var showErrors = function () {
    while (true) {
        console.log('Error');
    }
}; // funkcja nigdy się nie skończy -> typ never
var showLog = function () {
    console.log('some log');
}; // funkcja nie ma return, ale zwraca undefind nie jawnie
