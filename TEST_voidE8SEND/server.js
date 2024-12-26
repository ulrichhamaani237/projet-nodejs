const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configuration de Multer pour télécharger les fichiers audio
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Middleware pour servir les fichiers statiques (comme les fichiers audio)
app.use(express.static('uploads'));

// Gestion de la connexion Socket.IO
io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté');

  // Recevoir le message vocal et transmettre à l'autre utilisateur
  socket.on('sendVoiceMessage', (data) => {
    console.log('Message vocal reçu:', data);

    // Transmettre le fichier audio à l'autre utilisateur
    socket.broadcast.emit('receiveVoiceMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('Un utilisateur s\'est déconnecté');
  });
});

// Point d'upload pour les fichiers audio
app.post('/upload', upload.single('audio'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Aucun fichier audio n\'a été téléchargé');
  }
  const filePath = `/uploads/${req.file.filename}`;
  res.status(200).send({ fileUrl: filePath });
});

// Lancer le serveur
server.listen(3000, () => {
  console.log('Serveur en écoute sur http://localhost:3000');
});
