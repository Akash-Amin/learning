const express = require("express");
const mongoose = require ("mongoose");
const app = express();


const DB='mongodb+srv://dbuser:akash6402@mini.bclgg.mongodb.net/mern_blog?retryWrites=true&w=majority';
//mongoose.connect(DB,)
const middlware =(req,res,next)=>
{
    console.log("middleware");
    next();
}


app.get("/", (req, res) => {
    res.send("hellooo1");
});

app.get("/about",middlware, (req, res) => {
    res.send("hellooo2");
});

app.get("/contact", (req, res) => {
    res.send("hellooo3");
});

app.get("/signin", (req, res) => {
    res.send("hellooo");
});

app.get("/signup", (req, res) => {
    res.send("hellooo");
});

app.listen(5000,(req,res)=>{
    console.log("port connected");
});



