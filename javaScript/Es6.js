// "use strict";
//  function test(){
//      var num =100;
//      console.log("value  of num in tes()"+num);{
//         let num =200
//         console.log(""+num) }
//      }
 
//       test()

// var no=13;
// var no=30;
// console.log(no);

// let n=18;
// let n=15;
// console.log(n);

// const a=10;
// a=12
// console.log(a)

//for-of-loop
//  let  sum=0;
//  for(let number of[1,2,3]){
//      sum+=number;
//      console.log(sum)

//  }

//spread and rest 
// rest
// var sum;
//  function sumOfArrays( ...array){
//         return array.reduce((a,b)=> a+b); 

//  }
//  console.log(sumOfArrays(1,3))

//  // spread 
//  let array1=[1,2,3,4,5];
//  let array2 = [6,7,8,9]
//  array1=[...array1, ...array2]
// console.log(array1)

// // eg-2
// function sum(x, y, z) {
//     return x + y + z;
//   }
  
//   const numbers = [1, 2, 3,4];
  
//   console.log(sum(...numbers));

// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "foo"
//   });
  
//   console.log(promise1);


//   var p = new Promise((reslove,reject)=>reslove('hi'), reject('hello'))
// p.then((h)=>console.log('this is reslove')).catch((h)=> console.log('this is catch'))

