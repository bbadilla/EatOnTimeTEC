'use strict'

const User = require('../modelos/user')
const service = require('../services')

function signUp(req, res){
    const user = new User({
        id: req.body.id,
        nombre: req.body.name,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        correo: req.body.correo,
        provincia: req.body.provincia,
        categoria: req.body.categoria

    })

    user.save((err) => {
        if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

        return res.status(201).send({ token: service.createToken(user) })
    })
}

function signIn(req, res){
    User.find({id: req.body.id}, (err, user) => {
        if(err) return res.status(500).send({message: err})
        
        if (!user) return res.status(404).send({message: 'No existe el usuario'})

        req.user = user
        res.status(200).send({
            message: 'Te has loggeado correctamente',
            token: service.createToken(user)
        })
    })
}

module.exports = {
    signUp,
    signIn
}
