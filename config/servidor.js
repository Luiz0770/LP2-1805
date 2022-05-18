//importar o express
const express = require('express')
//executar o express 
const app = express()
//definit a porta do servidor local
const porta = 4040

//defeinir a pasta dos arquivos estaticos (css, imagens, jquery)
app.use(express.static('./assets'))

//exportar o app e a porta
module.exports={app,porta}