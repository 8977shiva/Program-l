const express = require("express");
const bodyParser =require("body-parser");
const app = express();

//  app.use((req, res, next)=>{
//       console.log(" i am  middleware");
//       next();
//  });
app. use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', (req,res)=>{
    res.send("helloo")
});

// app.get('/student', (req,res)=>{
//     res.send("hello students ")
// });

// app.post('/student', (req,res)=>{
//     console.log(req.body);
//      const user={
//           name:'sally',
//           hobby:'soccer'
//      }; 

//     res.send(user);

// })
app.listen(3000);
