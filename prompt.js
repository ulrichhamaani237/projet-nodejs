let PromptSyncs = require('prompt-sync')
const Prompt = PromptSyncs()

let name = Prompt('entrer votre nom : ')
console.log(`votre nom est donc : ${name}`);
