class User{
     constructor(firstname,lastname,age)
     {
         this.firstname=firstname;
         this.lastname=lastname;
         this.age=age;
     }
     
 }
 class User1 extends User{
      constructor(firstname,lastname,age){
          super(firstname,lastname,age)

      }
 }

 const ram= new User1("ram", "shiva", 21)

  console.log( "hello i am "+ram.firstname+" "+ram.lastname+" "+ram.age+" year old"+"i");