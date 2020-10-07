const mongoose = require ('mongoose');

const todoTaskSchema = new mongoose.Schema ({
conteúdo: {
tipo: String,
obrigatório: verdadeiro
},

encontro: {
tipo: data,
padrão: Date.now
}
})

module.exports = mongoose.model ('TodoTask', todoTaskSchema);