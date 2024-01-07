import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";
const app = express();
const port = 3000;
var bandname="";
app.use(bodyParser.urlencoded({extended:true}));
function bandnamegen(req,res,next){
  bandname=req.body.street+req.body["pet"];
  next();
}
app.use(bandnamegen);
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});
app.post("/submit",(req,res)=>{
  res.send(`<h1>Your band name is:</h1><p>${bandname}</p>`);
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
