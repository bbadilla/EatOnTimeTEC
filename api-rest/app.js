'use strict'


const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars')
const app = express();
const api = require('./routes')
const path = require('path');
const parser = require('body-parser');

app.use('/static', express.static('views'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('.html', hbs({
  defaultlayout: 'default',
  extname: '.html' 
}))


app.set('view engine', '.html')

app.use('/api', api)
app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login22.html'));
})

app.get('/init', (req, res)=>{
  res.sendFile(path.join(__dirname, '/views/index.html'));
  //res.sendFile(path.join(__dirname, '/views/inicio.html'));
})

/*app.get('/login.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '/views/index.html'));
  //res.sendFile(path.join(__dirname, '/views/inicio.html'));
})
*/
//Verificar
app.use(parser());
app.use(express.static("id"));

app.post("/login", function(req,res){
    var id = req.body.id;
    if(id == "2020" || id == "777" || id == "5555"){
        res.redirect("/init");
    }else{
        res.redirect("/static/login.html")
        
    }
});

module.exports = app