const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hellooo");
});

app.listen(5000,()=>{
    console.log("sucess run")
})