 export{}



// //enums

// enum color{ 'red', 'green'=5,'blue'}

// var c:color=color.blue;
// var b:color=color.green
// console.log(c)
// console.log(b)

 class  Sum {
     firstname:string
     constructor(firstname:string) {
         this.firstname=firstname;
         
     }
     ad(){
         console.log(this.firstname);
     }
 }
 var some = new Sum('vidya')
 some.ad()
console.log(some.firstname)
 



