const  express = require('express')
const router = express.Router()

router.use((req, res, next)=>{
    console.log('Time', new Date().toString());
    next()
    
})
router.get('/route1', (req, res)=>{
    res.send('Route 1 page')
})

router.get('/route2', (req, res)=>{
    res.send('Route 2 page')
})

module.exports = router