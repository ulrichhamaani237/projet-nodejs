const mysql = require('mysql')
const express = require('express')

// creation d'une connexion a la base de donneé
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
})

// etablissment de la connexion a la base de donneé
db.connect((err)=>{
if(err) throw err;
console.log("Server Mysql Connected");

// essayon de creer une BD paour l'execution d'une requette
db.query('CREATE DATABASE nodejsDB', (err, result)=>{
    if(err) throw err;
    console.log('database created!');
    
})
})


