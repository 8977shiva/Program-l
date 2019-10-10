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