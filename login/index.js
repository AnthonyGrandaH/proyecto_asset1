const express = require('express');
const app = express();
const bodyParser = require('body-parser')
//app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use('/app', require('./routes/login_routes'));


const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log("Server iniciado en el puerto: " + PORT))