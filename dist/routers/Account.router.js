'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Account = require('../controllers/Account.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _Account.postAccount);

module.exports = router;