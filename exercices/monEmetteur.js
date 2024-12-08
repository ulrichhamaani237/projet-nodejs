    const EventEmitter = require('events');

    class MonEmetteur extends EventEmitter {

        Hellow(message){

            this.emit('sayHellow', message);

        }

    };

    module.exports = MonEmetteur;