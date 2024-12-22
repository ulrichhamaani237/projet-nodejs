const {fork} = require('child_process')

// creation du processus fils

const processusFils = fork('./enfant.js')

processusFils.on('message', (message)=>{
    console.log(`Message rcu dansle processus parent ${message}`);
    
})

// Envoi de message au processus fils

processusFils.send('Salut enfant ud processus parent ')