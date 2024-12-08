class Pizza {
    constructor(){
        this.orderNumber = 0;
    }

    order(){
        this.orderNumber++;
    }

    displayOrderNumber()
    {
        console.log(`Commande n° ${this.orderNumber} en cours`);
    }
}

module.exports=Pizza;