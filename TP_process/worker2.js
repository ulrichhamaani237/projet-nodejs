const {parentPort, workerData} = require('worker_threads')

// calculate the     number of workers

const Puissance = (data) =>{
    return Math.pow(10, data);
}

parentPort.on('message', (message)=>{
    console.log(`Le message dans le worker2 est : \t ${message}` );

    // effectuons le calcule lourd
    let puiss = Puissance(workerData)
    
    parentPort.postMessage(`le resultat du calcule de la puisance est donc : ${puiss}`)
})