const fs = require('fs')

console.log("ecrture du programme Asynchrone");

fs.appendFile('./TP_FS/ecriture.txt', 'moi cest ulruch hamaani', (err) => {
    if(err) throw err

    console.log("fichier a ete modifier avec succes");
    
})

fs.rename('./TP_FS/ecriture.txt','ulrichFile.txt', (err) =>{
    if(err) throw err
    console.log("modification effectuer avec succes merci!");
    
})