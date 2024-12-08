const fs = require('fs');

console.log('ecriture en mode syncrone');

let path = './TP_FS/test.txt'

let content = 'mon code en nodejs'

fs.writeFile('./TP_FS/code.txt','javascript', (err)=>{
 if(err) throw err

 console.log("modification efectuer");
 
});

console.log("Programme Principale");
