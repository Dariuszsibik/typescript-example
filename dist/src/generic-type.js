"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        this.data.shift();
    };
    return Queue;
}());
var peaople = new Queue();
peaople.push('1');
peaople.push('123');
// const numbers = new Queue<number>();
// peaople.push(1);
// peaople.push(123);
