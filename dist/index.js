'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _v = require('./routers/v1.router');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var app = (0, _express2.default)();

var db = process.env.MONGODB_URI || 'mongodb://localhost/testing';
var port = process.env.PORT || 8100;

_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connect(db);

app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use(_bodyParser2.default.json());

app.use('/api/v1', _v2.default);

app.listen(port, function () {
  return console.log('app listening on port: ', port);
});