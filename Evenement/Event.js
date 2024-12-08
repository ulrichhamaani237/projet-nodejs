const events  = require('events');

const eventEmitter= new events.EventEmitter();

// creation de notre gestionnaire d'evenement

const ConnectHandler = function connected(){
    console.log("connexion etablie");
    // declanchement d'un evenement
    eventEmitter.emit("donneé envoyer avec succes")
}
// on subscri a un evenment
eventEmitter.on("connexion", ConnectHandler)

eventEmitter.on("donneé envoyer avec succes", function(){
    console.log("Données bien transferées");
    
})

eventEmitter.emit("connexion")
console.log("Fin du Programme");

 