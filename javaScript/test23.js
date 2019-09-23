function validatePIN (pin) {
    var a="'.+"
    if(pin>=0)
    {
    for (var i = 0; i < pin.length; i++)
    {
        if(a.includes(pin[i]))
        {
           return false;
        
        }
       var a= console.log(parseInt(pin))
        var b=console.log(pin)

        return (pin.length == 4 || pin.length == 6) && (parseInt(pin)===pin )
        
    }
}
return false;
   

  }
  console.log(validatePIN("13.0"))