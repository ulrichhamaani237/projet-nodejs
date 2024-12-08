const  EventEmitter = require('events');

const emitter  = new EventEmitter();

emitter.on('order-pizza', (size, topping)=>{
    console.log(`Order recu: la taille : ${size}, La garniture: ${topping}`);
    
})

emitter.emit('order-pizza', 'large', 'fruit de Mer');