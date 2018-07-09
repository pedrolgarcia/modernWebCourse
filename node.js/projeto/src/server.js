const express = require('express');
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');
const port = 3003;

const app = express();

app.use(bodyParser.urlencoded({ extended:true })); // Com 'use', qualquer requisição passa por esse middleware

app.get('/products', (req, res, next) => {
    //res.send({name: 'Notebook', price: 123.45}); send converte o objeto para JSON automaticante
    res.send(bancoDeDados.getProducts());
});

app.get('/products/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduct(req.params.id));
});

app.post('/products', (req, res, next) => {
    const product = bancoDeDados.saveProduct({
        name: req.body.name,
        price: req.body.price
    });

    res.send(product); // JSON
});

app.put('/products/:id', (req, res, next) => {
    const product = bancoDeDados.saveProduct({
        name: req.body.name,
        price: req.body.price,
        id: req.params.id
    });

    res.send(product); // JSON
});

app.delete('/products/:id', (req, res, next) => {
    res.send(bancoDeDados.deleteProduct(req.params.id)); // JSON
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}...`);
});