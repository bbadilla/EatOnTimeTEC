'use strict'

//
const mongoose = require('mongoose');
const app = require('./app')
const config = require('./config')


//DB Connection
mongoose.connect(config.db, (err, res)=>{
if(err){
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexion a la base de datos establecida....');

	app.listen(config.port, () => {
		return 'conectado'
	    console.log(`API REST Escuchando en el puerto ${config.port}`);
	})
});

