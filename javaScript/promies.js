
var p =new Promise(
function(resolve, reject) 
{
 console.log("I run immediately");
 setTimeout(function()
     {
         resolve('hii')
     },
     2000
 );
})
.then(function(result)
{
  console.log(result)
});

/*
const p = new Promise(
    (resolve, reject) => {
      console.log('Hello')
      setTimeout(() => {
        resolve('..from Enki!', 4000)
      })
    })
    .then(res => {
      console.log(res)
    })
    */
   
   
   const p =  new Promise(
    (resolve, reject) => {
      resolve('enki');
    })
    .then(res => console.log(res))
    .then(res => console.log('says'))
    .catch(err => console.log('hey'))
    .then( res=> console.log('hello'));   