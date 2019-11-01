var http= require('http');
var fs= require('fs');
http.createServer((req, res)=>{
    if(req.url==='/'){
    fs.readFile('./index.html',(err,data)=>{
        if(err){
            console.log(err);

        }res.write(data);
        res.end();
    })
  }

}).listen(3000)
