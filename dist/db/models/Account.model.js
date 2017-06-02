'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var AccountSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  account_token: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true,
    ref: 'User'
  },
  email: {
    type: String,
    ref: 'Email'
  },
  phone: {
    type: String,
    ref: 'Phone'
  },
  members: [{
    type: String,
    ref: 'User'
  }]
});

exports.default = _mongoose2.default.model('Account', AccountSchema);