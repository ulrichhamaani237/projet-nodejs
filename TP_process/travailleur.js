const {parentPort, workerData} = require('worker_threads')

//parentPort permet d"assurer la communication entre le parent et les workers et 
// workerData permet de recuperer les donneés qui viennent du processus principale
/**
 * 
 * @param {data} data 
 * cette function permet d'effectuer des calcule lourds
 */
function calculLourd(data) {
    let resultat = 0;

    for (let i = 0; i < data; i++) {
        resultat += i;
    }

    return resultat;
}

// ecout des messages du thread principale

parentPort.on('message', (message)=>{
    console.log(`message recu dans le worker : ${message}`);

    // effectue le traitement lourd
    const resultat = calculLourd(workerData);
    parentPort.postMessage(`resultat du calcul lourd ${resultat}`)
    
})