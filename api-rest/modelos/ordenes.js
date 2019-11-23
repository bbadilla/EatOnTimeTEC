'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrdenesSchema = Schema ({
    Id:Number,
    Estado: Boolean,
    Minutos: Number,
    Progreso: Number,
    Observaciones: String,
    Fecha: String,
    Contenido: {Usuario: Number, Platillo: String, Puntos:Number}
})

module.exports = mongoose.model('Orden', OrdenesSchema)