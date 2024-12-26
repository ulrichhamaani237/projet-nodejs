const http = require('http');
const fs = require('fs').promises;
const host = 'localhost';
const port = 8080;

// assurer la communication client-serveur
const requestListener = (request, response) => {
    // on lit le fichier si s'est s'est bon on l'affiche
    fs.readFile('./indes.html')
        .then((content) => {
            response.setHeader('Content-Type', 'text/html');
            response.writeHead(200);
            response.end(content);
        })
        .catch((err) => {
            response.writeHead(500);
            response.end(`Erreur du serveur : ${err.message}`);
        });
};

// création de mon serveur
const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
