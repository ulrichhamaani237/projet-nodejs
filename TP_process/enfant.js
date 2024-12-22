process.on('message', (message)=>{
    console.log(`Message recu dans le processus fils : ${message}` );
    process.send('bonjour du procesus fils')

})
