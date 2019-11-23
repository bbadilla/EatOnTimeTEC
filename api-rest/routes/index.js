'use strict'

//Librerias
const express = require('express');

//Controladores
const platilloCtrl = require('../controlers/platillo')
const userCtrl = require('../controlers/user')
const categoriaCtrl = require('../controlers/categoria')
const resenaCtrl = require('../controlers/resena')
const ordenCtrl = require('../controlers/ordenes')
const menuCtrl = require('../controlers/menu')


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

//Categoria
//GET ID
api.get('/categoria/:categoriaId', categoriaCtrl.getCategoria);
//POST categoria
api.post('/categoria', categoriaCtrl.saveCategoria);
//PUT categoria
api.put('/categoria/:categoriaId', categoriaCtrl.updateCategoria)

//Resena
//GET ID
api.get('/resena/:resenaId', resenaCtrl.getResena);
//POST categoria
api.post('/resena', resenaCtrl.saveResena);

//Ordenes
//GET ALL
api.get('/orden', ordenCtrl.getOrdenes);
//GET ID
api.get('/orden/:ordenId', ordenCtrl.getOrden);
//POST
api.post('/orden', ordenCtrl.saveOrdenes);
//PUT
api.put('/orden/:ordenId', ordenCtrl.updateOrden)

//Menu
//GET ALL
api.get('/menu', menuCtrl.getMenus);
//GET ID
api.get('/menu/:menuId', menuCtrl.getMenu);
//POST
api.post('/menu', menuCtrl.saveMenu);

module.exports = api