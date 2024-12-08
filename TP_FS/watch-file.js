const fs = require('fs');


console.log("Surveiller un fichier...");

fs.watch('./TP_FS/test.txt',(eventType, filename)=>{
    console.log(`le fichier ${filename} a été modifié`);
    
})

console.log('Programme principale');
