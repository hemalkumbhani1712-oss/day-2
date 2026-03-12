var express = require("express")

var app = express()

app.get('/',(req, res)=>{
    res.send("hello world")
})

app.get('/home',(req, res)=>{
    res.send("hello home")
})

app.listen(3000);