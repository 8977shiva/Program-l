/* this requries an html file to show output*/
var a =prompt("please enter the first number ");
console.log("the first number is "+a)
var b= prompt("please enter the second number");
console.log("the second number is "+b)

var c=null;
c=a;
a=b;
b=c;
console.log("after swaping :" +a);
console.log("after swaping :" +b);