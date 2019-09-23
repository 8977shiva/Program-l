/* -------------------------------------------------------------------------- */
/*                       call() method and apply() method                       */
/* -------------------------------------------------------------------------- */


var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  
  //call function using call method
  
  var b=person.fullName.call(person1);
  console.log(b);
  
  /* difference between call and apply is 
  The call() method takes arguments separately.
  
  The apply() method takes arguments as an array.
  */
  var c=person.fullName.apply(person1);
  console.log(c);