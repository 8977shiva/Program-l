
/*var obj={
    firstname:"shiva",
    lastname:"reddy"
}
for(var i in obj)
{
    //console.log(i);
    //console.log(obj[i]);
    console.log("given",i,"is",obj[i]);
} */

//-----for of--
Array.prototype.newfun=function(){};
var it=[10,20,30];
for(var i in it)
{
    console.log(i);
}
for(var i of it)
{
    console.log(i);
}