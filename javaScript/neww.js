function sm(arr1)
{
    console.log(arr1)
    var arr2=[]
    for(var i=0;i<arr1.length;i++)
    {
        if(arr1[i]>2)
        arr2.push(arr1[i])
    }
    console.log(arr2)
}
sm([2,3,5])