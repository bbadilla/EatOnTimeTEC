'use strict'
const Categoria = require('../modelos/categoria')

//Get platillo especificp
function getCategoria(req, res){
    let categoriaId = req.params.categoriaId

	Categoria.findById(categoriaId, (err, categoria) => {
		if (err) return res.status(500).send({message: `Error: ${err}`})
		
		if (!categoria) return res.status(404).send({message: `Error: ${err}`})

		res.status(200).send({categoria})
	})
	

}

//Salvar categorias
function saveCategoria(req, res){
    console.log('POST /api/categoria')
	console.log(req.body)

	let categoria = new Categoria()
	categoria.Nombre = req.body.Nombre
	categoria.Puntos = req.body.Puntos

	categoria.save((err, categoriaStored) => {
		
		if (err) res.status(500).send({message: `Error al salvar los datos : ${err}` })
		
		res.status(200).send({categoria: categoriaStored})
	})
}

//Actualizar categoria
function updateCategoria(req, res){
    let categoriaId = req.params.categoriaId
	let update = req.body

	Platillo.findByIdAndUpdate(categoriaId, update, (err, categoriaUpdated) =>{
		if (err) res.status(500).send({message: `Error: ${err}` })
	
		res.status(200).send({categoria: categoriaUpdated})
	})
    
}


module.exports = {
    saveCategoria,
	updateCategoria,
	getCategoria
}