const express =  require('express')
const middleware1 = require('./middleware/loginmiddlexare')
const app = express()
// utilisation du middleware de journalisation

app.use(middleware1.logingMiddleware)
app.get('/home', (req, res)=>{
    res.send('Hello World')
})

app.get('/contact', (req, res)=>{
    res.send('Hello World contact page')
})

app.get('/', (req, res)=>{
    res.send('Hel')
})

/**
 * @returns void
 * cette route permet de definir que b? est facultative
 * soit abcd ou acd
 */
app.get('/ab?cd', (req, res)=>{
    res.send('Regular PAge')
})

app.get('/users/:userId/books/:bookId', (req, res)=>{
    res.send(req.params)
})



app.listen(8080, ()=>{
    console.log("Server connected at 8080");
    
})