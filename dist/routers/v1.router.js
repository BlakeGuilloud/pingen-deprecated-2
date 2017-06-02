'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _Account = require('./Account.router');

var _Account2 = _interopRequireDefault(_Account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use('/accounts', _Account2.default);

exports.default = router;