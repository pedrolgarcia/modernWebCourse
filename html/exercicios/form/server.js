const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); // Lê o corpo da requisição, faz um parse e joga no req.body

app.post('/usuarios', (req, res) => {
    console.log(req.body);
    res.send('<h1>Parabéns. Usuário incluído!</h1>');
});

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send('<h1>Parabéns. Usuário alterado!</h1>');
});

app.listen(3003);