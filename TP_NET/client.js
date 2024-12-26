var net = require('net');

var client = net.connect({port: 9000}, function(){
    console.log("Client connecté au server...");
    
})

client.on('data', function(data){
    console.log(data.toString());

    client.end()
    
})
client.on('end', function(){
    console.log("Client déconnecté du serveur...");
    
})