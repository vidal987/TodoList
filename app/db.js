//Set up mongoose connection
var mongoose = require('mongoose');

var mongoDB = 'YOUR_CONNECTION_STRING';

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true}).then(()=>{
    console.log('Conexão bem sucedida!')
}).catch((error) =>{
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    console.log('Erro na conexão!')
});
