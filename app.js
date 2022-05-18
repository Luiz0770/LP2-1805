const servidor  = require('./config/servidor')
const app = servidor.app
const porta = servidor.porta

//importar a porta index.js
//const index = require('./routes/index')(app)

//importar a porta login.js
//const login = require('./routes/login')(app)

//importar a porta login.js
//const registro = require('./routes/registro')(app)

const consign = require('consign')
consign().include('./routes').into(app)

app.listen(porta)