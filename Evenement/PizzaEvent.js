const EventEmitter = require('events')

class Pizza extends EventEmitter  {
    constructor(){
        super()
        this.orderNumber = 0;
    }

    order(size, topping){
        this.orderNumber++;
        this.emit("order",size,topping)
    }

    displayOrderNumber()
    {
        console.log(`Commande n° ${this.orderNumber} en cours`);
    }
}

module.exports=Pizza;