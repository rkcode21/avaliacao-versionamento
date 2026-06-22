const express = require('express');
const path = require('path');
const fraseController = require('./controllers/frasecontroller');

const app = express();
app.use(express.json());

// Serve o HTML da pasta views
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'gerador_frase-seguro.html'));
});

// Rota da API
app.post('/api/inspiracao', fraseController.gerarInspiracao);

app.listen(3000, () => {
console.log("Servidor iniciado em http://localhost:3000");
});
