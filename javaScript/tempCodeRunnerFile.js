function  p (s) {
  r='';
  

 for (let char of s){
   // console.log(char);
    console.log( r=char+r);
}
console.log(r);
}
p("hello");