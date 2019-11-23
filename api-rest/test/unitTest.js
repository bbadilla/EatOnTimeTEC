//Prueba de aprndizaje
const assert = require('chai').assert;
const mongoose = require('mongoose');
const app = require('../prueba.js')
const User = require('../modelos/user.js')
const Categoria = require('../modelos/categoria.js')
const Menu = require('../modelos/menu.js')
const Orden = require('../modelos/ordenes.js')
const Platillo = require('../modelos/platillo.js')
const Resena = require('../modelos/resena.js')




// Prueba de coneccion a la base
describe("Guardar datos en la base", function(){
    before(function(done) {
      mongoose.connect('mongodb+srv://Bryan:bZXSR5DZJAG1UYnC@cluster0-pb3np.azure.mongodb.net/EatOnTimeTEC?retryWrites=true&w=majority', function(error) {
          if (error) console.error('Error while connecting:\n%\n', error);
          console.log('connected');
          done(error);
      });
  });

  //Datos de usuario
  it("Salvar datos de usuario", function(){
    var char = new User({
      id: 2011448877,
      nombre: "Emma",
      apellido: "Esquivel",
      telefono: 22330011,
      correo: "e@gmail.com",
      provincia: "Cartago",
      puntos: 0,
      rol: '',
      categoria: 'carnes',
      amigos: []
    })

    char.save().then(function(){
      assert(char.isNew== false);
    })

    
  })
})

describe("Guardar datos en la base", function(){
  before(function(done) {
    mongoose.connect('mongodb+srv://Bryan:bZXSR5DZJAG1UYnC@cluster0-pb3np.azure.mongodb.net/EatOnTimeTEC?retryWrites=true&w=majority', function(error) {
        if (error) console.error('Error while connecting:\n%\n', error);
        console.log('connected');
        done(error);
    });
});


  //Datos de categorias
  it("Salvar datos de categoria", function(){
    var char = new Categoria({
      Nombre: "carnes",
      Puntos: 100
    })
    char.save().then(function(){
      assert(char.isNew== false);
    })

    
  })
})

describe("Guardar datos en la base", function(){
  before(function(done) {
    mongoose.connect('mongodb+srv://Bryan:bZXSR5DZJAG1UYnC@cluster0-pb3np.azure.mongodb.net/EatOnTimeTEC?retryWrites=true&w=majority', function(error) {
        if (error) console.error('Error while connecting:\n%\n', error);
        console.log('connected');
        done(error);
    });
});

  it("Salvar datos de Menu", function(){
    var char = new Menu({
      Tiempo: "Desayuno",
      Platillos: ['Pinto', 'Pan']
    })
    char.save().then(function(){
      assert(char.isNew== false);
    })

    
  })})


  describe("Guardar datos en la base", function(){
    before(function(done) {
      mongoose.connect('mongodb+srv://Bryan:bZXSR5DZJAG1UYnC@cluster0-pb3np.azure.mongodb.net/EatOnTimeTEC?retryWrites=true&w=majority', function(error) {
          if (error) console.error('Error while connecting:\n%\n', error);
          console.log('connected');
          done(error);
      });
  });
  
  //Datos de Orden
  it("Salvar datos de orden", function(){
    var char = new Orden({
      Id:03,
      Estado: false,
      Minutos: 10,
      Progreso: 0,
      Observaciones: "sin cebolla",
      Fecha: "10/8/19",
      Contenido: {Usuario: 01, Platillo: "espaguetti", Puntos:100}
      })
      char.save().then(function(){
        assert(char.isNew== false);
      })

    
  })})

  describe("Guardar datos en la base", function(){
    before(function(done) {
      mongoose.connect('mongodb+srv://Bryan:bZXSR5DZJAG1UYnC@cluster0-pb3np.azure.mongodb.net/EatOnTimeTEC?retryWrites=true&w=majority', function(error) {
          if (error) console.error('Error while connecting:\n%\n', error);
          console.log('connected');
          done(error);
      });
  });
  

    //Datos de platillo
    it("Salvar datos de platillo", function(){
      var char = new Platillo({
        Nombre: "Arroz con pollo",
        Minutos: 15,
        Precio: 800,
        Info: "20% de calorias por 100 gramos",
        Receta: "arroz, pollo, verduras",
        Categoria: "carnes"
        })
        char.save().then(function(){
          assert(char.isNew== false);
        })
    })
})


describe("Buscar datos en la base", function(){
  before(function(done) {
    mongoose.connect('mongodb+srv://Bryan:bZXSR5DZJAG1UYnC@cluster0-pb3np.azure.mongodb.net/EatOnTimeTEC?retryWrites=true&w=majority', function(error) {
        if (error) console.error('Error while connecting:\n%\n', error);
        console.log('connected');
        done(error);
    });
});


  //Datos de usuario
  it("Obtener datos de usuario", function(){
    
    var x = User.findById("5dd8b015047545f04e2e5d7")
    console.log(x)
    
   
  })
})

