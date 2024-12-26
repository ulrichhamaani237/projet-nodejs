const express =  require('express')
const app = express()
const router = require('./routes/Route')

// utilisation des routes autant middleware

app.use(router)

app.listen(8080, ()=>{
    console.log("Server connected at 8080");
    
})