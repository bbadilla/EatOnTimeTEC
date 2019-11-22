'use strict'

//Librerias
const express = require('express');
const platilloCtrl = require('../controlers/platillo')
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


module.exports = api