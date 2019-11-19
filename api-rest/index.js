'use strict'

//Librerias
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Metodos get, post, put delete

app.get('/api/menu', (req, res)=>{
    res.send(200, {platillos: []})
});

app.get('/api/menu/:paltillo', (req,res)=>{

});

app.post('/api/menu', (req,res) =>{
    console.log(req.body)
    res.status(200).send({message: 'Platillo pedido'})
});

app.put('/api/menu/:platillo', (req,res)=>{

})

app.delete('/api/menu/:platillo', (req,res)=>{

})

app.listen(port, () => {
    console.log(`API REST Escuchando en el puerto ${port}`)
});