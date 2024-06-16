//create a  Own Server

const http=require("node:http");

const HTTP_SERVER=http.createServer((req,res)=>{
     res.writeHead(200, { 'Content-Type': 'text/html' });
     res.end(`<html>
          <head>
          <title>Nisha</title>
          </head>
          <body>
          <h1>Nishaa Surendran</h1>
          <h1>Varshini Surendran</h1>
          </body>
          </html>`);
})
HTTP_SERVER.listen(2429,"localhost",()=>{
     console.log("File Created Successfully")
})