function  changeobj(x)
{
    x.name="apple";

}
var obj={
    name:"app",
    age:10
}
changeobj(obj)// caling the function changeobj and passing x:obj
console.log(obj.name)// callng object key