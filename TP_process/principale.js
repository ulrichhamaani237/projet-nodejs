const {Worker} = require('worker_threads')

const worker = new Worker('./travailleur.js',{workerData:100000000000})

// on ecoute le message du worker thread

worker.on('message', (message)=>{
    console.log(`le massage recu dans le thread principale : ${message}`);
    
})

worker.postMessage('bonjour du Thread Principale')