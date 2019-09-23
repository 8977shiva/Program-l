// var findChar = function(str){
//    var char =[];
//   var l=0;
//    for(var i = 0; i < str.length; i++){
//      if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
//        char[l] = str[i];
//        l++
//        break;
//      }
//    }
 
//    return char;
//    }
//    console.log(findChar('abacb'))

// function getUsers(){
//             fetch('./User.json')
//             .then((res) => res.json())
//             .then((data) => {
//                 let output = '<h2>Users</h2>';
//                 data.forEach(function(user){
//                     output += `
//                     <ul>
//                         <li>ID: ${user.id}</li>
//                         <li>Name: ${user.name}</li>
//                         <li>Email: ${user.name}</li>
//                         </ul>
//                         `   
//                         ;
//                 });
//                 document.getElementById('output').innerHTML = output;
                
//             })
//         }
// getUsers()

