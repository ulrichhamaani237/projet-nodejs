var net = require('net');
// on se connecte d'abord au server via le port 9000 au quel il ecoute
var client2 = net.connect({port: 9000}, function(){
    console.log("vous ete bien connecté au serveur merci...");
    
})

// on recupere les donneés "data" du serveur et on les affiche
client2.on('data', function(data){
    console.log(data.toString());
    
});

// le Client se deconnecte du serveur
client2.on("end", function(){
    console.log("vous ete bien deconnecté au serveur...");
    
})