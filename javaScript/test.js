// export{}
// let n:string="VidyaSagar";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// console.log(n)
// enum  numb{one, two , three}
//  let c:numb = numb.one;
//   console.log(c)
// //function
// function add(num1, num2):number{
//     return "num1+num2";
// }
// console.log(add(5,10))
// function greetText(Name: number): string {
//     var a="hello"+Name;
//     console.log(typeof(a))
//    }
//    console.log(greetText(5))
// enum Role {Employee=3, Manager, Admin};
// var role: Role = Role.Employee;
// var  sum:Role=Role.Manager;
// console.log(sum);
// console.log(role);
// //class
//  class Person{
//    first_name:string;
//    second_name:string;
//    constructor(first_name: string, last_name: string, age: number) {
//     this.first_name = first_name;
//      this.second_name = last_name;
//      }
//     //method
//     greet(){
//       console.log("hello" +this.first_name)
//     }
//  }
//  var a:Person= new Person('shivaa','reddy');
//  a.greet();
// class Person {
//    first_name: string;
//    last_name: string;
//    age: number;
//    constructor(first_name: string, last_name: string, age: number) {
//    this.first_name = first_name;
//    this.last_name = last_name;
//    this.age = age;
//    }
//    greet() {
//    console.log("Hello", this.first_name);
//    }
//    ageInYears(years: number): number {
//    return this.age + years;
//    }
//   }
//   var p: Person = new Person('Felipe', 'Coury', 36);
//   p.greet()
//inheritance
var Report = /** @class */ (function () {
    function Report(data) {
        this.data = data;
    }
    Report.prototype.run = function () {
        this.data.forEach(function (line) { console.log(line); });
    };
    return Report;
}());
var TabbedReport = /** @class */ (function (_super) {
    __extends(TabbedReport, _super);
    function TabbedReport(headers, values) {
        var _this = _super.call(this, values) || this;
        _this.headers = headers;
        return _this;
    }
    TabbedReport.prototype.run = function () {
        console.log(this.headers);
        _super.prototype.run.call(this);
    };
    return TabbedReport;
}(Report));
var headers = ['Name'];
var data = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
var r = new TabbedReport(headers, data);
r.run();
