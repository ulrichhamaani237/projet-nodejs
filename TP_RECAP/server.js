var express = require('express');


var bodyParser = require('body-parser');

var app = express();
var router = require('./router/router')
//definition du moteur de template engine
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({ extended: true }));

// utilisation de l'objet router 
app.use(router)

app.listen(8585, ()=>{
    console.log('listening on http://localhost:8585');
    
})
