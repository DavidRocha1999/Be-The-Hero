const express = require('express');
const cors = require('cors');
const routes = require("./routes"); // Buscar rotas no ficheiro routes

const app = express();

app.use(cors());

app.use(express.json());  // Informar a app que vamos usar json
app.use(routes); // iniciar routas
 
app.listen(3333);