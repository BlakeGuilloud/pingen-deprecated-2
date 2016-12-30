'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apiController = require('../controllers/api.controller.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _apiController.getApiKey);

module.exports = router;