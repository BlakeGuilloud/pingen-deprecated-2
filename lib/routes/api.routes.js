'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// import { getApiKey } from '../controllers/api.controller.js';
//
// router.get('/', (getApiKey));
router.get('/', function (req, res) {
  res.status(401).json({
    code: 401,
    message: 'Invalid API key'
  });

  return false;
});

module.exports = router;