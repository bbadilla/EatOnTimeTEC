'use strict'

const mongoose= require('mongoose')
const Schema = mongoose.Schema

const PlatilloSchema = Schema ({
    name: String,
    picture: String,
    price: {type: Number, default: 0},
    category: {type: String, enum: ['carnes', 'ensalada', 'pasta', 'vegetariana']},
    description: String
})

module.exports = mongoose.model('Platillo', PlatilloSchema)