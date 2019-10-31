const  http= require('http')

const  server = http.createServer(( request,response)=>{
    //console.log(' i the new serve');
    // response.setHeader('Content-type','text/html');
    // response.end('<h1>hello</h1>')

    
   response.write('<h1>hii</h1>ii')
   response.end();
   
})

server.listen(3000)