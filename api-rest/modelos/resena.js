'use strict'

const mongoose= require('mongoose')
const Schema = mongoose.Schema

const ResSchema = Schema ({
    IdOrden: Number,
    Estrellas: Number,
    Comentario: String
})

module.exports = mongoose.model('Resena', ResSchema)