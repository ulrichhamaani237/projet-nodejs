const http = require('http');
const {fork} = require('child_process')
const host = 'localhost';
const port = 8000;


const requestListener = function(req, res) {
    if (req.url === '/calcul') {
       
        const child = fork(__dirname+"/count")
        
        child.on("message", (message)=>{

            console.log('Returning /calcul result');
            // specifie dans quel typ de donneé on est censé generer la reponse  
              res.setHeader("Content-Type", "application/json")
              // si tous se passe bien
              res.writeHead(200)
              // show message
              res.end(message)
        })

        child.send("START")

      
        
    }else if(req.url === "/hello"){
        
        console.log('Returning /HELLO result');
        // specifie dans quel typ de donneé on est censé generer la reponse  
          res.setHeader("Content-Type", "application/json")
          // si tous se passe bien
          res.writeHead(200)
          // show message
          res.end("message:Hello")
    }
}; // TOD should probably   be a function   instead of  a string        
// creation de mon serveur 
const server = http.createServer(requestListener)

// faire appel au server
server.listen(port, host, ()=>{
    console.log(`Server si running on http://${host}:${port}`);
    
});