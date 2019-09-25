// export{}
// let n:string="VidyaSagar";

// console.log(n)
// enum  numb{one, two , three}
//  let c:numb = numb.one;
//   console.log(c)

// //function
// function add(num1, num2):number{
//     return "num1+num2";

// }
// console.log(add(5,10))
// function greetText(Name: number): string {
//     var a="hello"+Name;
//     console.log(typeof(a))
//    }
//    console.log(greetText(5))

// enum Role {Employee=3, Manager, Admin};
// var role: Role = Role.Employee;
// var  sum:Role=Role.Manager;
// console.log(sum);
// console.log(role);




// //class
//  class Person{
//    first_name:string;
//    second_name:string;
//    constructor(first_name: string, last_name: string, age: number) {
//     this.first_name = first_name;
//      this.second_name = last_name;
     
//      }
//     //method
//     greet(){
//       console.log("hello" +this.first_name)

//     }
//  }
//  var a:Person= new Person('shivaa','reddy');
 
//  a.greet();

// class Person {
//    first_name: string;
//    last_name: string;
//    age: number;
  
//    constructor(first_name: string, last_name: string, age: number) {
//    this.first_name = first_name;
//    this.last_name = last_name;
//    this.age = age;
//    }
  
//    greet() {
//    console.log("Hello", this.first_name);
//    }
  
//    ageInYears(years: number): number {
//    return this.age + years;
//    }
//   }
//   var p: Person = new Person('Felipe', 'Coury', 36);
//   p.greet()



  //inheritance

// class  Report{
//    data:Array<string>;
//    constructor(data:Array<string>){
//      this.data=data;  
//    } 
//    run(){
//      this.data.forEach(function(line) {console.log(line);});
//    }

 class Car {   
  Color:string     
  constructor(color:string) {   
     this.Color = color  
  }   
}   
class Audi extends Car {   
   Price: number  
   constructor(color: string, price: number) {  
       super(color);  
       this.Price = price;  
   }  
   display():void {  
       console.log("Color of Audi car: " + this.Color);  
       console.log("Price of Audi car: " + this.Price);  
   }  
}  
let obj = new Audi(" Black", 8500000 );  
obj.display()