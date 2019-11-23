'use strict'
const Orden = require('../modelos/ordenes')

//Get orden especificp
function getOrden(req, res){
    let ordenId = req.params.ordenId

	Orden.findById(ordenId, (err, orden) => {
		if (err) return res.status(500).send({message: `Error: ${err}`})
		
		if (!orden) return res.status(404).send({message: `Error: ${err}`})

		res.status(200).send({orden})
	})
	

}

//Get ordenes
function getOrdenes(req, res){
    Orden.find({}, (err, ordenes) => {
		if (err) return res.status(500).send({message: `Error: ${err}`})
		
		if (!ordenes) return res.status(404).send({message: `Error: ${err}`})

		res.send(200, {ordenes})
	})
    
}

//Salvar ordenes
function saveOrdenes(req, res){
    console.log('POST /api/orden')
	console.log(req.body)

	let orden = new Orden()
	orden.Id = req.body.Id
	orden.Estado = req.body.Estado
	orden.Minutos = req.body.Minutos
	orden.Progreso = req.body.Progreso
	orden.Observaciones = req.body.Observaciones
    orden.Fecha = req.body.Fecha
    orden.Contenido = req.body.Contenido

	orden.save((err, ordenStored) => {
		
		if (err) res.status(500).send({message: `Error al salvar los datos : ${err}` })
		
		res.status(200).send({orden: ordenStored})
	})
}

//Actualizar orden
function updateOrden(req, res){
    let ordenId = req.params.ordenId
	let update = req.body

	Orden.findByIdAndUpdate(ordenId, update, (err, ordenUpdated) =>{
		if (err) res.status(500).send({message: `Error: ${err}` })
	
		res.status(200).send({orden: ordenUpdated})
	})
    
}



module.exports = {
    getOrden, 
    updateOrden, 
    saveOrdenes,
    getOrdenes
}