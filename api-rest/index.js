'use strict'

//Librerias
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Platillo = require('./modelos/platillo')

const app = express();
const port = process.env.PORT || 3021;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({
    extended: true
  }));

//Metodos get, post, put delete

//GET ALL
app.get('/api/platillo', (req, res)=>{
	Platillo.find({}, (err, platillos) => {
		if (err) return res.status(500).send({message: `Error: ${err}`})
		
		if (!platillos) return res.status(404).send({message: `Error: ${err}`})

		res.send(200, {platillos})
	})
    
});

//GET ID
app.get('/api/platillo/:platilloId', (req,res)=>{
	let platilloId = req.params.platilloId

	Platillo.findById(platilloId, (err, platillo) => {
		if (err) return res.status(500).send({message: `Error: ${err}`})
		
		if (!platillo) return res.status(404).send({message: `Error: ${err}`})

		res.status(200).send({platillo})
	})
	

});

//POST
app.post('/api/platillo', (req,res) =>{
	console.log('POST /api/platillo')
	console.log(req.body)

	let platillo = new Platillo()
	platillo.name = req.body.name
	platillo.picture = req.body.picture
	platillo.price = req.body.price
	platillo.category = req.body.category
	platillo.description = req.body.description

	platillo.save((err, platilloStored) => {
		
		if (err) res.status(500).send({message: `Error al salvar los datos : ${err}` })
		
		res.status(200).send({platillo: platilloStored})
	})
});


//PUT
app.put('/api/platillo/:platilloId', (req,res)=>{
	let platilloId = req.params.platilloId
	let update = req.body

	Platillo.findByIdAndUpdate(platilloId, update, (err, platilloUpdated) =>{
		if (err) res.status(500).send({message: `Error: ${err}` })
	
		res.status(200).send({platillo: platilloUpdated})
	})

})


//DELETE
app.delete('/api/platillo/:platilloId', (req,res)=>{
	let platilloId = req.params.platilloId

	Platillo.findById(platilloId, (err, platillo)=>{
		if (err) res.status(500).send({message: `Error: ${err}` })
		
		platillo.remove(err =>{
			if (err) res.status(500).send({message: `Error: ${err}` })
			res.status(200).send({message:'Exito'})
		} )
	
	})
})


//DB Connection
mongoose.connect('mongodb+srv://Bryan:bZXSR5DZJAG1UYnC@cluster0-pb3np.azure.mongodb.net/EatOnTimeTEC', (err, res)=>{
if(err){
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexion a la base de datos establecida....');

	app.listen(port, () => {
	    console.log(`API REST Escuchando en el puerto ${port}`);
	})
});

"mongodb+srv://shahid:<PASSWORD>@cluster0-1q7ty.mongodb.net/test"