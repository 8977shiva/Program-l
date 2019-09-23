
// using perdefined method
var arr1=[2,5,7,8,9]
// inserting at index 3
arr1.splice(3,0,6)
console.log(arr1)

/* using for loop*/
function insert(arr1)
{
    let index=3;
    let number=6;
    for(i=arr1.length;i>index;i--)
    {
        arr1[i]=arr1[i-1];
    }
    arr1[index]=number;
    console.log(arr1);
}
insert([2,5,7,8,9])