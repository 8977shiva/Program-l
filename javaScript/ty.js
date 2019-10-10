"use strict";
exports.__esModule = true;
// //enums
// enum color{ 'red', 'green'=5,'blue'}
// var c:color=color.blue;
// var b:color=color.green
// console.log(c)
// console.log(b)
var Sum = /** @class */ (function () {
    function Sum(firstname) {
        this.firstname = firstname;
    }
    Sum.prototype.ad = function () {
        console.log(this.firstname);
    };
    return Sum;
}());
var some = new Sum('vidya');
some.ad();
console.log(some.firstname);
