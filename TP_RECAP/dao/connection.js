const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tpdb'
})

// etablire la connection

db.connect(function(err){
    if(err) throw err
    console.log("Mysql connected");
    
})

module.exports = db;