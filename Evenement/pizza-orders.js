const Pizza = require('./PizzaEvent.js')

let pizza = new Pizza;

pizza.on("order", (size, topping) =>{
    console.log(`Oder recu: la taille: ${size}, la Garniture: ${topping}`);
    
})

pizza.order("small", "Piquante")
pizza.displayOrderNumber();