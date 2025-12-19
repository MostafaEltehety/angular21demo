const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const PORT=3000;
const app=express();

app.use(bodyParser.json());
app.use(cors());

app.get("/",function(requ,res){
  res.send("hello from node server");
});

app.listen(PORT,function(){
  console.log("Server runing on port"+PORT);
});

app.post('/enroll',function(requ,res){
console.log(requ.body);
res.status(200).send({"data":"Data Recived"})
});
