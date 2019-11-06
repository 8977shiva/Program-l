const express = require("express");
const app = express();

 app.use((req, res, next)=>{
      console.log(" i am  middleware");
      next();
 });
 
app.get('/', (req,res)=>{
    res.send("helloo")
})

app.get('/student', (req,res)=>{
    res.send("hello students ")
})
app.listen(3000);
