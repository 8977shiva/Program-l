// -- using literals----
var obj ={
    name:"shiva",// key: value
    age:10

}
for ( var i in obj)
{
  console.log(i);
  console.log(obj[i]);
}
delete obj.age;
console.log(obj)
//console.log(obj.age)

  //-using object constructor--
 var obj1={}
 obj1.name = "shiva";
 obj1.age =  37;
 console.log(obj1.age);

 //---using  constructor--

var obj3 = new Object();
obj3.name="ram";
obj3.boo= false;
obj3.age=50;
console.log(obj3.boo)
//--object inside a object
var obj4 ={
     obj5 :{
        name: "shiva"
    }
     
}
console.log(obj4.obj5.name)
/*
an other constructor 
*/
function p(name,sur)
{
  this.name=name;
  this,sur=sur;
}
var c =new p("ram","reddy")
console.log(p);

//-- this  key word--
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
