

function pangram(str) {
    var letters = "abcdefghijklmnopqrstuvwxyz"; // define 26 letters
    var arr = str.split(""); // split string to array
  
    for (let i = 0; i < arr.length; i++) {
      // loop through array elements
      let lower = arr[i].toLowerCase(); // convert to lower case
      letters = letters.replace(lower, ""); // match array elements with letters
    }
  
    if (letters.length === 0) {
      // if lenth of letters = 0, it is a pangram, ie: all letters exist in the string
      return "Input is a pangram";
    } else {
      return "Input is not a pangram";
    }
  }
  console.log(pangram("The quick brown fox jumps over the lazy dog"));