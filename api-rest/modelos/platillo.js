'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlatilloSchema = Schema ({
    Nombre: String,
    Minutos: Number,
    Precio: Number,
    Info: String,
    Receta: String,
    Categoria: String
})

module.exports = mongoose.model('Platillo', PlatilloSchema)