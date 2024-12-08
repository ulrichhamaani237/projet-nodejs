const EventEmitter = require("events");
let fs = require("fs");

class GestionnaireFichier extends EventEmitter {
  constructor() {
    super();
    // this.name
    // this.path
  }

  lireFichier(name, message) {
    fs.readFile(name, "utf-8", (err, data) => {
      if (err) throw err;

      this.emit("lireFile", { message, data });
    });
  }

  fichierEcrit(namefile, message) {
    fs.writeFile(namefile, message, (err, data) => {
      if (err) throw err;
   data = "success"
      this.emit("ecrireLire", data);
    });
  }
}

module.exports = GestionnaireFichier;
