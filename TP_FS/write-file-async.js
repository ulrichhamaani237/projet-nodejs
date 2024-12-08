const fs = require('fs');

console.log('ecriture dans un fichier en mode syncrone');
fs.writeFileSync('./TP_FS/ecriture.txt', 'hellow worl!')

console.log('Programme principale');