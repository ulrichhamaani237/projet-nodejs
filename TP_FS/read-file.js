const fs =require('fs')

console.log("Lecture du fichier txt")

 var content =  fs.readFileSync('./TP_FS/test.txt', 'utf8').toString()

 console.log(content);

 console.log('programme principal');
 
 