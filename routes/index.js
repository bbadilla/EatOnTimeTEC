'use strict'

//Librerias
const express = require('express');

//Controladores
const platilloCtrl = require('../controlers/platillo')
const userCtrl = require('../controlers/user')
const categoriaCtrl = require('../controlers/categoria')

//Concede permisos a rutas privadas 
const auth = require('../middlewares/auth')
const api = express.Router();

//Metodos get, post, put delete

//Platillos
//GET ALL
api.get('/platillo', platilloCtrl.getPlatillos);
//GET ID
api.get('/platillo/:platilloId', platilloCtrl.getPlatillo);
//POST
api.post('/platillo', platilloCtrl.savePlatillo);
//PUT
api.put('/platillo/:platilloId', platilloCtrl.updatePlatillo)
//DELETE
api.delete('/platillo/:platilloId', platilloCtrl.deletePlatillo )

//User Registro y LogIn
api.post('/singup', userCtrl.signUp)
api.post('/singin', userCtrl.signIn)

//Privacidad
//Contiene auth
/api.get('/private', auth, (req, res)=>{
    res.status(200).send({message: 'Tienes acceso'})
})

//POST categoria
api.post('/categoria', categoriaCtrl.saveCategoria);
//PUT categoria
api.put('/categoria/:categoriaId', categoriaCtrl.updateCategoria)

module.exports = api