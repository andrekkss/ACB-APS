var express = require('express');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var service = require('./src/service/requisicao');

//router for express
var indexRouter = require('./src/routes/index');

//command for socket
var socket = require('./src/routes/socket');

service();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);

module.exports = {
    app: app,
    command: socket
}