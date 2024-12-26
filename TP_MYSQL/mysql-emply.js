const mysql = require('mysql')
const express = require('express')

// creation d'une connexion a la base de donneé
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsdb'
})

// etablissment de la connexion a la base de donneé
db.connect((err)=>{
if(err) throw err;
console.log("Server Mysql Connected");

// insertion de donneé dans la bd 
db.query("insert into employe values(10,'2020-02-20','coco', 25000 )", (err, result)=>{
    if(err) throw err;
    console.log(result);
    
})

// modification des donneés

// insertion de donneé dans la bd 
db.query("update employe set salaire=300000 where id=4", (err, result)=>{
    if(err) throw err;
    console.log("le donneés ont ete modifier avec success...");
    
})

// suppression des donneés 
db.query("delete from employe where id=5", (err, result)=>{
    if(err) throw err;
    console.log("delete from employee susses");
    
})


// essayon de creer une BD paour l'execution d'une requette
db.query('SELECT * FROM employe', (err, result)=>{
    if(err) throw err;
    console.log(result);
    
})


})


