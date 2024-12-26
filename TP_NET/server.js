var net =  require('net');

var server = net.createServer(function(connection){
    console.log("Client connecté...");
    
    connection.on('end', function(){
        console.log("Le client est deconecté!");
        
    }) 

    connection.write("Salut! Comment puis-je vous aider?\r\n");
    connection.pipe(connection)

})

server.listen(9000, function(){
    console.log("Serveur démarré sur le port 9000");
})