const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const socketSetup = require('./socket');
const routes = require('./routes');

socketSetup(io);
app.use(express.static(path.join(__dirname,'../dist')));
app.use('/api', routes);


module.exports = server;
