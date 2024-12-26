var express = require('express')

// creation d'une application express
var app = express()

// definition dela route pour la racine de l'url

app.get('/', (req, res) =>{
    res.send('First page express')
})

app.get("/contact", (req, res) =>{
    res.send('Contact Page')
})

app.get('/info', (req, res) =>{
    res.send("my info");
    
})

var server = app.listen(8181, ()=>{
    console.log("server start on 8080...");
    
})