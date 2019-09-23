function evod(arr1)
{
    var arr2=[];
    var arr3=[];
    for(var i=0;i<arr1.length;i++)
    {
        if(arr1[i]%2===0)
        {
          arr2.push(arr1[i]);
          
        }
        else
        {
            arr3.push(arr1[i])
        }
        
    }
    
    console.log("the even number are " + arr2)
    console.log(arr3)
}
evod([1,3,4,5,6,2]);
