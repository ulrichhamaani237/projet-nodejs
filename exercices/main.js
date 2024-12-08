// const MonEmetteur = require('./monEmetteur')
const Utilisateur = require("./utilisateurs.js");
const GestionnaireFichier = require("./GestionnaireFichier.js");

// monEmetteurs = new MonEmetteur();
utilisateur = new Utilisateur();
gestFile = new GestionnaireFichier();

// monEmetteurs.on('sayHellow', (message)=>{
//     console.log(`le message est donc ${message}`);

// })

// monEmetteurs.Hellow('ulrich')
utilisateur.on("userCreate", (utilisateur) => {
  console.log(
    `les infos de l'utilisateur sont:nom: ${utilisateur.nom} , email: ${utilisateur.email}`
  );
});

utilisateur.CreateUtilisateur("jean", "rose");
utilisateur.CreateUtilisateur("jean", "hamaani@gmail.com");

gestFile.on("lireFile", (dataFile) => {
  console.log(
    `les informations sont donc : \n ${dataFile.message} et , ${dataFile.data} `
  );
});

gestFile.on('ecrireLire', (message) =>{
    console.log(`le resultat est donc: \n ${message}`);
    
})

gestFile.lireFichier("./exercices/file1.txt", "merci pour le code ");
gestFile.fichierEcrit("./exercices/file2", "salut je mappele ulrich")
