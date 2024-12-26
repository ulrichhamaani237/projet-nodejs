const expresse = require('express')

const app = expresse()

const port = 8080;

// creation d'une route

app.get('/', function (req, res) {
    res.send('Hello')
})

app.listen(port, ()=>{
    console.log(`connecté au server ${port}`);
    
})