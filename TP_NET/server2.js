var net = require('net');

var server2 = net.createServer(function(connection){

 console.log("Nous somme connecté avec success!");

 connection.on('end', function(){
    console.log('le client c\' est deconnecté...\n');
    
 })

 connection.write('Bienvenue cher client je suis le server...\n');

 // pour etablir le server 
 connection.pipe(connection)

})

// on definir le information du serveur tel que le  port qu'il utilisera

server2.listen(9000, function(){
    console.log("serveur bien demarrer sur le port 9000");

})