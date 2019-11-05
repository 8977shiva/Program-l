function palindrome(str) {
    str = str.toLowerCase();
    var rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
      rev += str[i];
    }
    console.log(rev)
}
palindrome('helllo')



function  p (s) {
  r='';
  

 for (let char of s){
   // console.log(char);
    console.log( r=char+r);
}
console.log(r);
}
p("hello");