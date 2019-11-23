'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
    id: {type: Number, unique: true},
    nombre: String,
    apellido: String,
    telefono: Number,
    correo: {type: String, unique:true},
    provincia: String,
    puntos: Number,
    rol: {type: String, enum: ['', 'Admin', 'AdminMenu', 'Cocinero' ]},
    categoria: {type: String, enum: ['carnes', 'ensalada', 'pasta', 'vegetariana']},
    amigos: [Number]
})

module.exports = mongoose.model('User', UserSchema)