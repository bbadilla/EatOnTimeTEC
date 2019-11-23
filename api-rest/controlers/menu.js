'use strict'
const Menu = require('../modelos/menu')


//Get Menu
function getMenus(req, res){
    Menu.find({}, (err, menu) => {
		if (err) return res.status(500).send({message: `Error: ${err}`})
		
		if (!menu) return res.status(404).send({message: `Error: ${err}`})

		res.send(200, {menu})
	})
    
}

//Get menu especificp
function getMenu(req, res){
    let menuId = req.params.menuId

	Platillo.findById(menuId, (err, menu) => {
		if (err) return res.status(500).send({message: `Error: ${err}`})
		
		if (!menu) return res.status(404).send({message: `Error: ${err}`})

		res.status(200).send({menu})
	})
	

}


//Salvar resenas
function saveMenu(req, res){
    console.log('POST /api/resena')
	console.log(req.body)

	let menu = new Menu()
	menu.Tiempo = req.body.Tiempo
    menu.Platillos = req.body.Platillos


	menu.save((err, menuStored) => {
		
		if (err) res.status(500).send({message: `Error al salvar los datos : ${err}` })
		
		res.status(200).send({menu: menuStored})
	})
}



module.exports = {
    saveMenu,
    getMenus,
    getMenu

}