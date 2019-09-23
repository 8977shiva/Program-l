var a
 a=10
console.log(a)
b="string"
console.log(typeof(a))
var b
console.log(typeof(b))
/*--------------------------------*/
function n1(arra) {
    console.log(arra)

}
n1("hello")

var b= function(a,b)
{
     return a+b;
}

console.log(b(2,3))

var c =new Function("console.log('hello')")
c()
/*--for in---*/
var a=[2,4,5,6]
for ( var i in a)
{
    console.log(i)
}
for (var i of a)
{
    console.log(i)
}


var a=[1,2,3,4,5,]
var b=[6,7]
//a.unshift(0)
console.log(a)
a.shift()
console.log(a)
a.reverse()
console.log(a)
a.sort()
console.log(a)
var c= a.concat(b)
console.log(c)
var d= c.length
console.log(a)




a.pop()
console.log(a)
a.push(5)
console.log(a)
var b= a.slice(2,5)
console.log(b)



var s="heloo ip how is it going"
//var ip=s.charAt(0)
//var ip = s.endsWith("ip")// retrun  t/f
//var ip =s.includes(" ")
//var ip = s.indexOf("ip")
console.log(ip)

// this function

var  obj5={
    name : 'something',

    gender:'male',
      sm:function (fname)
     {
       this.name=fname;
     }
     
}
console.log("before :" + obj5.name)
obj5.sm("hii");
console.log(obj5.name)  

// callback

function some(thing, thing2)
{
    console.log(thing)
    thing2();

}
function thing1(se)
{
    setTimeout(function()
    {
        console.log("thing")
        
    },2000);
    
}
some("some", thing1)

var p = new Promise(function(resovle,reject )
{
    // let i=5
   
     resovle("sucess")
    
    
      reject("fail")
    
});
p.then(function(su)
    {
        console.log("result:"+su)
    })
p.catch(function(su){
    console.log("result:"+su);
})
//--------------------
let  b=()=>{
    console.log("woriking")
}
b();

let  c=(a,b)=>
  a+b;

console.log(c(2,3))
