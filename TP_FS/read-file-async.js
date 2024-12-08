const fs = require('fs');

console.log("La lecture du fichier ");

fs.readFile('./TP_FS/test.txt','utf-8', (err, data)=>{
    if (err) throw err;

    console.log(data);
    
})

console.log("Programme Principal");

