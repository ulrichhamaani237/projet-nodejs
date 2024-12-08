 exports.marque = 'BMW'
exports.demarrer = function () {
    console.log('start');
    
}

exports.vitesse = 12
exports.couleur = "bleu"

var passager = []

var addPasasger = function (name) {
    var newPassager = {name: name, addAt: new Date()}
    passager.push(newPassager)
}

var allPassager = function (){
    passager.forEach(function(p){
        console.log(`${p.name} assAt at ${p.addAt}`);
        
    })
}
exports.addPasasger = addPasasger
exports.allPassager = allPassager