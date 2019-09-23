/*
*A callback is a function that is to be executed after 
another function has finished executing — hence the name ‘call back’. In JavaScript, functions are objects. 
Because of this, functions can take functions as arguments, and can be returned by other functions. 
Functions that do this are called higher-order functions. 
Any function that is passed as an argument is called a callback function.
*/

function one(){
    //-- using setTimeout to delay 
    setTimeout(function()
    {
        console.log(1);
    },
    5000);
}
function two()
{
    console.log(2);
}
one();
two();   



//---- creating callback---
/*
function dowork(subject, callback,git) 

{   
    console.log('starting ' +subject ,'work');
    callback();
    git();
}
function done(){
    console.log("done working on js");
}
function notdone(){
    console.log("some thing")
}
 dowork("js",notdone,done);


/*

  let some=(some, thing)=>
 {
     console.log("some  " +some,thing())
     //thing;
 }
let th=()=>{
    console.log("thing")

}
some("some",th)

*/
 