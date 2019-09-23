function SortA(arr1)



{
    var arr2=[];
    var max=arr1[0];
    for(var i=0;i<arr1.length;i++)
    {
        
        
        if(arr1[i]>=max)
         {
         
         
         max=arr1[i];
         arr2[i]=arr1[i];
         }
        
    }
    console.log(arr2)
}
SortA([2,3,5,1])
