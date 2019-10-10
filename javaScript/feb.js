 
var n1=0;
var n3
 var n2=1
 var con=10;
 console.log(n1+""+n3)
 for(var i=2;i<con;i++)
 {
   n3=n2+n1
   console.log(n3)
   n1=n2
   n2=n3

 }
 //
 function fibonacci(n){
  var fib1=0;
  var fib2=1;
  var fib;
      for(var i=2;i<n;i++){
       fib=fib1+fib2;
       console.log(fib);
       fib1=fib2;
       fib2=fib;   
      }
     
  }
  fibonacci(10);