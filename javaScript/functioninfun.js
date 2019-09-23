function add()
{
    var sum= function(x){
        console.log(x*5);
    }
    return sum;

}

console.log(add);
var r = add();

console.log(r);
console.log(r(5));