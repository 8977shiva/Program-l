function a(name, age, expe)
{
  this.name=name,
  this.age=age,
  this.expe=expe
}
 var b= new a('shiva','21','0');
 console.log(b.name);

//----------------------------------------------------
// to add properties or method we use prototypes 
// 1.adding propertie
/*
syntax is 
   objectname.prototype.propertie="value";
   */
 
 a.prototype.skill="javascript";

console.log(b.skill);



//----------------------------------------------------
//2.add a new method
/*
syntax
   objectname.prototype.propertie=function(){}
   */
 a.prototype.naes=function()
 {
  console.log("Hi,I am " + this.name + " my age is  " + this.age);
 }
 // calling
 //console.log(b.naes());
b.naes();
  

