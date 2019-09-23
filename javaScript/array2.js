var arr1=[2,3,6,6,5];
    var arr2=[]
    var sed= 0;
   var max =0;
  
    for(var i=0;i<arr1.length;i++)
    {
        
        
        if(arr1[i]>max)
         {
         
         sed=max;
         max=arr1[i];
        
         }
          else 
          if (arr1[i] > sed) 
          {
            sed = arr1[i];
          }
        
         
    }

     arr2.push(max,sed)
     console.log(arr2)
    

