const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(3000, () => console.log('Servidor Iniciado em http://localhost:3000'));
