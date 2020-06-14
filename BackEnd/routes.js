const express = require('express');
const routes = express.Router();

const session = require('./src/controller/session');
const chamado = require('./src/controller/chamados');


routes.post('/login-cliente', session.login_cliente);
routes.post('/login-suporte', session.login_suporte);

routes.post('/chamado', chamado.create);
routes.get('/chamado/:codigo', chamado.read);
routes.put('/chamado', chamado.update);
routes.delete('/chamado/:codigo', chamado.delete);
routes.get('/chamado-list/:status', chamado.index);


module.exports = routes;