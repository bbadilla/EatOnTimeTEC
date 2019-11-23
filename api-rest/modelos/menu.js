'use strict'

const mongoose= require('mongoose')
const Schema = mongoose.Schema

const MenuSchema = Schema ({
    Tiempo: String,
    Platillos: {String}
})

module.exports = mongoose.model('Menu', MenuSchema)