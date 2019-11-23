'use strict'
const Resena = require('../modelos/resena')


//Get Resenas
function getResena(req, res){
    Resena.find({}, (err, resenas) => {
		if (err) return res.status(500).send({message: `Error: ${err}`})
		
		if (!resenas) return res.status(404).send({message: `Error: ${err}`})

		res.send(200, {resenas})
	})
    
}


//Salvar resenas
function saveResena(req, res){
    console.log('POST /api/resena')
	console.log(req.body)

	let resena = new Resena()
	resena.IdOrden = req.body.IdOrden
    resena.Estrellas = req.body.Estrellas
    resena.Comentario = req.body.Comentario

	resena.save((err, resenaStored) => {
		
		if (err) res.status(500).send({message: `Error al salvar los datos : ${err}` })
		
		res.status(200).send({resena: resenaStored})
	})
}



module.exports = {
    saveResena,
    getResena
}