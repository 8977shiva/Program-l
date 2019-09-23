// declaration
function add(a,b)
{
    return a+b;
}
console.log(add(2,3))
// expression
var a = function(a,b)
{
     return a*b;
    
}
console.log(a(2,3))




//constructor
var fn = new Function("console.log('helo')");

//------- using arguments

function fun(a,b)
{
    console.log(arguments[0]);
}
fun(1);
//-- for variable inititaliion should be 1st then we cam call the var but if its do after callin  it will not work--





console.log(i);
j=10;
console.log(j);
var i=50;//canbe  not initialzed
var j; // 
/*
console.log(s());
console.log(r());
// hosting for function
function s() 
{
    console.log('hel');

}
// not initialized  - hositng doesnt work for expression
var r = function() 
{
    console.log("hell");
}
*/