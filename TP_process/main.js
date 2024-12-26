const {Worker} = require('worker_threads')

const worker1 = new Worker('./worker1.js', {workerData: 10900})
const worker2 = new Worker('./worker2.js', {workerData: 200})

worker1.on('message', (message)=>{
    console.log(`Le message recu dans le programme Main envoyer par Worker1 est : \t ${message}`);
    
})

worker2.on('message', (message)=>{
    console.log(`Le message  recu dans le programme Main envoyer par Worker2 est : \t ${message}`);
    
})

//Envoyer du  message au 2 workers 

worker1.postMessage('bonjour de la part du Main')
worker2.postMessage('bonjour de la part du Main')
