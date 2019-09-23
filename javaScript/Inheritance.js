

/* -------------------------------------------------------------------------- */
/*                                 inheritance                                */
/* -------------------------------------------------------------------------- */



 // delcaring a  superclass 
    // class Shape{
    //      move(){
    //          console.log('move')

    //      }
    //       some(){
    //           console.log("some")
    //       }
          
    //     }

    //  // declaring the sub class
    //  class Circle extends Shape{
    //       draw(){
    //           console.log('draw');
    //       }
          
    //  }
    //  const c = new Circle()
    //  //c.move()
    //  //c.some()
    //  c.draw()























// /* -------------------------------------------------------------------------- */
// /*                                 constructor                                */
// /* -------------------------------------------------------------------------- */

//  class User{
//      constructor(firstname,lastname,age)
//      {
//          this.firstname=firstname;
//          this.lastname=lastname;
//          this.age=age;
//      }
     
//  }
  
//  class User1 extends User{
//       constructor(fi,lastname,age,lang){
//         this.lang=lang;
    
//           super(firstname,lastname,age);
//       }

          

      
//  }

//  var  ram= new User1("ram", "shiva",45,"javascript")

//   console.log( "hello i am "+ram.firstname+" "+ram.lastname+" "+ram.age+"  "+ram.lang);


















/* -------------------------------------------------------------------------- */
/*                                  prototype                                 */
/* -------------------------------------------------------------------------- */




function Person(firstName, lastName) {
    this.FirstName = firstName ;
    this.LastName = lastName ;            
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}

function Student(firstName, lastName, schoolName, grade)
{
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName ;
    this.Grade = grade;
}
Student.prototype.getFullName = function () {
    return `$(`this.FirstName')` + " " + this.LastName ;
}



Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("James","Bond", "XYZ", 10);
            
console.log(std.getFullName()); // James Bond
console.log(std instanceof Student); // true
 console.log(std instanceof Person); // true