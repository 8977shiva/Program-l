 const express= require ('express');
const app = new express();
 const mongoose = require('mongoose')

//middleware
 



app.get('/', (req,res)=>{
    res.send('we  are on home');
});

 app.get('/posts',(req, res)=>{
     res.send('we are on posts');
 });

// connect to db
 mongoose.connect('mongodb+srv://<admin>:<passworddb>@cluster0-gajoo.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true }, ()=>{
    console.log("db")
 })
app.listen(3000)