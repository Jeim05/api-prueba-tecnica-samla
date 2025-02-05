const express = require("express");
require("dotenv").config();
const rutas = require('./routes/usuarios');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/usuarios', rutas) //gestiona los middelware

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log("Servidor activo en el puerto " + PORT));
} catch (error) {
    console.log(error);
}
