import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{
 res.send("<h1>hello, this is Deepak</h1>");
});
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact me</h1> <p>deepak1122003kumar@gmail.com</p>");
   });
app.get("/about",(req,res)=>{
    res.send("<h1>About</h1><p>This is Deepak from EEE department </p>");
   });
app.listen(port,()=>{
    console.log(`server started in port ${port}`);
})