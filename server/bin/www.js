#!/usr/bin/env node

/**
 * Module dependencies.
 */

var main = require('../app');
var debug = require('debug')('server:server');
var http = require('http');

var app = main.app;
var command = main.command;

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

/**
 * Create HTTP server and WebSocket.
 */

var server = http.createServer(app);
var io = require('socket.io')(server);

command.start(io);
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, function(){
  console.log(`servidor iniciado na porta:${port}`);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' necessidade de super usuario.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' porta sendo usada.');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

module.exports = server;