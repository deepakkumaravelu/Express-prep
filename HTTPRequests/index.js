import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{
 res.send("<h1>hello</h1>");
});
app.get("/home",(req,res)=>{
    res.send("<h1>hello home</h1>");
   });
app.listen(port,()=>{
    console.log(`server started in port ${port}`);
})