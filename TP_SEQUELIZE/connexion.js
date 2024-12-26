const {Sequelize, DataTypes} = require('sequelize')

// etablre la chaine de connexion a la bd
const db = new Sequelize("nodejsdb","root","",{
    host: "localhost",
    dialect: 'mysql',
})

// Etablissement de la connexion

db.authenticate()
.then(()=>{
console.log("Server MysqlConnected");
})
.catch((error)=>{

    console.log('Probleme Mysql:')
})

// Definier l'entite books

const Book = db.define('books', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    auth:{
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate:{
        type: DataTypes.DATEONLY,
    },
    subject: {
        type: DataTypes.INTEGER
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})


db.sync()
.then(()=>{
    console.log('table book created');
    
}).catch((err)=>{
  console.log(err);
  
})

// Insertion des doneés dans la table
/*
Book.create({
    title: "JAVA",
    auth: "jean",
    releaseDate: "2019-03-10",
    subject: 199,
    content: "Start easy with java language "
}).then((result)=>{console.log(result);
}).catch((err)=>{console.log(err);});
*/
// Recuperer les donneés de la BD

//Book.findAll().then((result)=>{console.log(result);}).catch((err)=>{console.log(err);});

// Recuperer les donneés avec la close where

Book.findOne({
    where: {
        id:"2"
    }
}).then((res)=>{console.log(res);
}).catch((err)=>{console.log(err)})

Book.destroy({
    where:{
        id:"1",
    }
}).then(()=>{console.log("book delete susseccful");
})
.catch((err)=>{console.log(err);
})