let personne=require('./personne')

console.log(personne.nom);
console.log(personne.prenom);

personne.ajouterInfo("dodo","dale")
personne.ajouterInfo("mario","dane")

console.log(personne.afficherInfo());
