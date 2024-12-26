var dns = require('dns')

dns.lookup("www.google.com", function onLookup(err, adreess, family){
    console.log("Adresse: " + adreess);
    
})

dns.reverse("142.250.200.100", function onReverse(err, hostname){
    console.log("Nom d'hôte: " + hostname);
    
})