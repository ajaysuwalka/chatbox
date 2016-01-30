var express=require("express");
var app=express();

app.get("/",function(req,res){
    res.send("Hello world");
});

app.get("/user/gettoken",function(req,res){
    res.send(Math.random().toString());
    
});


var port= process.env.PORT || 3000;

app.listen(port,function(){
    console.log("App is listening on port ",port);
    
});