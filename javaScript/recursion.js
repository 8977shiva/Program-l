// using same function to call it self is recursion

function s(n)
{
    if(n===1)
   {
        return 1;
    
    }
    return n*s(n-1);
}
console.log(s(3));
console.log('\n')
//-------------------------
//showing with expression
/*
var t = function temp(n) // temp name for  function
    {
    if(n===1)
    {
        return 1;
    }
    return n*temp(n-1);

}
console.log(t(4));

*/
/*
function some(n)
{
    var b=6
    if (n==1)
    {
        return 1;
    }
    return b=n*some(b-1)

}
console.log(some(4))
*/
 