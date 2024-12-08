let PromptSync = require('prompt-sync')

const prompt = PromptSync();

let a  = prompt('entrer la valeur de a')
let b = prompt('entrer la valeur de b')
 
console.log(`La somme de ${a} et ${b} est ${ParseInt(a)+ParseInt(b)}`);
