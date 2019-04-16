var express = require('express');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//router for express
var indexRouter = require('./src/routes/index');

//command for socket
var chat = require('./src/routes/chat');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);

module.exports = {
    app: app,
    command: chat
}
