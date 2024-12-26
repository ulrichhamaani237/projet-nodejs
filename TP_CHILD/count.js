






const slowFunction = ()=>{
    // Simule une fonction lente qui prendra approximativement 5 secondes
    let counter =0
   while (counter < 5000000000) {
    counter++;
   }

   return counter;
}

process.on("message", (message)=>{
    if(message == "START"){
        console.log("le processus child a recu le message start");
        let result = slowFunction()
        let message = `"Result":${result}"`
        process.send(message)
        
    }
})