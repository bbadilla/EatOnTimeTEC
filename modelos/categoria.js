'use strict'

const mongoose= require('mongoose')
const Schema = mongoose.Schema

const CategoriaSchema = Schema ({
    Nombre: {type: String, enum: ['carnes', 'ensalada', 'pasta', 'vegetariana']},
    Puntos: Number
})

module.exports = mongoose.model('Categoria', CategoriaSchema)