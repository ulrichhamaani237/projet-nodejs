const express = require('express')
const data = require('./data/data')
let bodyParser=require('body-parser')

const app = express()
const port = 8080

app.set('view engine', 'ejs')
// ce middleware permet de gerer la requette
app.use(bodyParser.urlencoded({ extended: true }))
// configure le moteur
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.send("Welcome!")
})

// route principale
app.get('/home', (req, res) => {
    res.render("home", {result:data.data});
})

// route pour le calcule de la somme
app.get('/somme', (req, res)=>{
    res.render("somme",  {resultat:0,nb1:0, nb2:0});
})

app.post('/operation', (req, res)=>{
    let n1 = req.body.number1;
    let n2 = req.body.number2;
    let somme  =0
    if (req.body.btn === 'somme') {
     somme = parseInt(n1) + parseInt(n2);
        
    }else if (req.body.btn === 'soustration') {
     somme = parseInt(n1) - parseInt(n2);
        
    }else if (req.body.btn === 'multiplication') {
     somme = parseInt(n1) * parseInt(n2);
        
    }else if (req.body.btn === 'divisions') {  
     somme = parseInt(n1) / parseInt(n2);
        
    }

    const data = {

    }
    res.render('somme',
         {
            resultat:somme, nb1:n1, nb2:n2}
        );
})





app.listen(port, (err, res) => {
    console.log(`connecting in port ${port}`);
    
})

