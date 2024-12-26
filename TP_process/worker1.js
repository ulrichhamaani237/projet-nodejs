const {parentPort, workerData} = require('worker_threads')

function calculerFactoriel(data){
    let fact =1;
   for (let i = 1; i <= data; i++) {
    
    fact = fact*i;
    
   }

   return fact
}

parentPort.on('message', (message)=>{
    console.log(`Le message recu dans le Worker1 envoyer par le programme principale  est : ${message}`);
    
    // effectu le calcule lourd

    const facto = calculerFactoriel(workerData)
    parentPort.postMessage(`le resultat du factoriel est donc : ${facto}`)
})


