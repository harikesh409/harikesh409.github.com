// jshint esversion:6
const express=require("express");
const app=express();
app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get("/about-me.html",function(req,res){
  res.sendFile(__dirname+"/about-me.html");
});
app.get("/portfolio.html",function(req,res){
  res.sendFile(__dirname+"/portfolio.html");
});
app.get("/resume.html",function(req,res){
  res.sendFile(__dirname+"/resume.html");
});
app.get("/contact.html",function(req,res){
  res.sendFile(__dirname+"/contact.html");
});
app.listen(process.env.PORT || 3000,function(){
  console.log("server is running on port 3000");
});
