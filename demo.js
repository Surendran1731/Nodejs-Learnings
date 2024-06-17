const express=require('express')
const HTTP_SERVER=express();
const PORT=2429;
const HOSTNAME="localhost";

//start listening to the port

HTTP_SERVER.listen(PORT,HOSTNAME,1,()=>{
     console.log(`App Started at http://${HOSTNAME}:${PORT}`);
});


HTTP_SERVER.get("/",(req,res,next)=>{
     res.end(`<h1>Nisha Surendran</h1>`)
})


HTTP_SERVER.get("/create",(req,res,next)=>{
     res.end(`<h1>Varshini Surendran</h1>`)
})

HTTP_SERVER.get("/end",(req,res,next)=>{
     res.end(`<h1>Surendran</h1>`)
})