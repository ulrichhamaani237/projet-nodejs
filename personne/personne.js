 exports.nom = "jean"
 exports.prenom = "pierre"

 let Personne = [];
 exports.ajouterInfo = function (name, prenom) {
    Personne.push({name: name, prenom: prenom})
 }

 exports.afficherInfo = function () {
    Personne.forEach((p)=>{
        console.log(`nom: ${p.name} et prenom: ${p.prenom} Date: ${new Date()}`);
        
    })
 }