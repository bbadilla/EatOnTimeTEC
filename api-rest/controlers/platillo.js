'use strict'
const Platillo = require('../modelos/platillo')

//Get platillo especificp
function getPlatillo(req, res){
    let platilloId = req.params.platilloId

	Platillo.findById(platilloId, (err, platillo) => {
		if (err) return res.status(500).send({message: `Error: ${err}`})
		
		if (!platillo) return res.status(404).send({message: `Error: ${err}`})

		res.status(200).send({platillo})
	})
	

}

//Get platillos
function getPlatillos(req, res){
    Platillo.find({}, (err, platillos) => {
		if (err) return res.status(500).send({message: `Error: ${err}`})
		
		if (!platillos) return res.status(404).send({message: `Error: ${err}`})

		res.send(200, {platillos})
	})
    
}

//Salvar platillos
function savePlatillo(req, res){
    console.log('POST /api/platillo')
	console.log(req.body)

	let platillo = new Platillo()
	platillo.Nombre = req.body.Nombre
	platillo.Minutos = req.body.Minutos
	platillo.Precio = req.body.Precio
	platillo.Info = req.body.Info
	platillo.Receta = req.body.Receta
	platillo.Categoria = req.body.Categoria

	platillo.save((err, platilloStored) => {
		
		if (err) res.status(500).send({message: `Error al salvar los datos : ${err}` })
		
		res.status(200).send({platillo: platilloStored})
	})
}

//Actualizar platillo
function updatePlatillo(req, res){
    let platilloId = req.params.platilloId
	let update = req.body

	Platillo.findByIdAndUpdate(platilloId, update, (err, platilloUpdated) =>{
		if (err) res.status(500).send({message: `Error: ${err}` })
	
		res.status(200).send({platillo: platilloUpdated})
	})
    
}

//Eliminar platillo
function deletePlatillo(req, res){
    let platilloId = req.params.platilloId

	Platillo.findById(platilloId, (err, platillo)=>{
		if (err) res.status(500).send({message: `Error: ${err}` })
		
		platillo.remove(err =>{
			if (err) res.status(500).send({message: `Error: ${err}` })
			res.status(200).send({message:'Exito'})
		} )
	
	})
    
}

module.exports = {
    getPlatillo, 
    getPlatillos, 
    savePlatillo,
    updatePlatillo, 
    deletePlatillo 
}