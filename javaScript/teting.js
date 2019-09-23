function findShort(s){
    s=s.split(' ')
    var count =[]
   
    for(var i=0;i<s.length;i++)
    {
    var t= s[i]
    //console.log(t)
    count [i] =t.length
   
    }
    var u=Math.min.apply(null, count)
   return u
    
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

