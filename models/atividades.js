//importar o mongoose
const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informacoes do usuario
const modelo = mongoose.Schema({
    data:Date,
    tipo:String,
    entrega:String,
    disciplina:String,
    instrucoes:String,
    usuarios:String
})

//gravar a estrutura na model usuarios
const usuarios = mongoose.model('atividades',modelo)

//exportar os dados para acesso externo
module.exports = atividades