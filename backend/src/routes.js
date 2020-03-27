const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs' , OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Exportar variavel 
module.exports = routes;




// ROTA / RECURSO


/* 
    Métodos HTTP

    GET: Buscar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/


/* 
    Tipos de parâmetros

    Query Params: Parâmetros nomeados enviados na rota após ? (Filtros, paginação)      (get  | recurso?name=.... | request.query)
    Route Params: Parâmetros utilizados para indentificar recursos                      (get  | recurso/:id | request.params)
    Request Body: Corpo da requisição, utilizado para criar ou alterar recusos "json"   (post | rescurso | request.body)
*/

/* 
    SQL : MySQL, SQLite, PostgreSQL, Oracla, Microsoft SQL Server, etc
    NoSQL: MongoDB, CouchDB, etc
*/

/* 
    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
*/


