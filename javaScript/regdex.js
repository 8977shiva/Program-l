function isPalindrome(x) {
    
    var string =x.toLowerCase()
    if (string == string.split('').reverse().join('') )
    {
        return true;
    }
    else 
    {
        return false;
    }
}
console.log(isPalindrome("141"))