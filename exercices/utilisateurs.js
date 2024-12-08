const EventEmitter = require('events');

class Utilisateur extends EventEmitter {
    constructor(){
        super();
       this.utilisateur = [];
    }

    CreateUtilisateur(nom, email){
        const user = {nom, email};
        this.utilisateur.push(user)

        this.emit("userCreate", user)
    }
}

module.exports = Utilisateur;