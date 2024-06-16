// console.log("Helloo Nisha Surendran");

// for(let i=1;i<=10;i++){
//      console.log(i);
// }

//to declare a file
 
const fs=require("node:fs");

//to write a file
fs.writeFile("./Files/message3.txt","Hello Nisha Surendran","utf-8",()=>{
     console.log("File Created SuccessFully");
})


//to read a file
fs.readFile("./Files/message3.txt","utf-8",(error,data)=>{
     if(error) console.log(error);
     else console.log(data);
})

//read the files inside the value

fs.readdir("./Files",(error,data)=>{
     if(error) console.log(error)
          else{
               for(var file of data){
                    // console.log(file.split("."));
                    if(file.split(".")[1] ==="txt"){
                         console.log(file);
                    }
               }
          }
})