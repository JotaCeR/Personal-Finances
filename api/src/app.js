const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const server = express()
const routes = require('./routes/index');

require('./db.js');

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Acess-Control-Allow-Credentials', 'true');
    res.header('Acess-Control-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Aceess-Control-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use('/', routes);

// Error catching endware. (Stole from other personal project)
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;