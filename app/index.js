require("dotenv-safe").config();
var jwt = require('jsonwebtoken');
require('./db.js')
//index.js
var http = require('http'); 
const express = require('express') 
const app = express() 
var cookieParser = require('cookie-parser'); 
const bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    // res.json({message: "Tudo ok por aqui!"});
    res.render('login.ejs', {message: null});
})

app.get('/login', (req, res, next) => {
    // res.json({message: "Tudo ok por aqui!"});
    res.render('login.html', {message: null});
})

app.get('/clientes', verifyJWT, (req, res, next) => { 
    console.log("Retornou todos as tarefas!");

    res.json([{id:1,nome:'jason'}]);
    if(res.json == ([{id:1,nome:'jason'}])){
      res.render('index.ejs', {message: null});
    }
}) 

//authentication
app.post('/login', (req, res, next) => {    
  
  //esse teste abaixo deve ser feito no seu banco de dados
  if(req.body.user === 'jason' && req.body.pwd === '123'){
    //auth ok
    const id = 1; //esse id viria do banco de dados
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 600 // expires in 10min
    });
    return res.json({ auth: true, token: token });
  }
  
  res.status(500).json({message: 'Login inválido!'});
})

app.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
})


function verifyJWT(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}


var server = http.createServer(app); 
server.listen(3001);
console.log("Servidor escutando na porta 3001...")