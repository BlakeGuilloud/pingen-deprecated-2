'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pinController = require('../controllers/pin.controller.js');

var _api = require('../middleware/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get('/', _api.validateKey, _pinController.getUsers);
router.post('/', _api.validateKey, _pinController.register);
router.post('/:id', _api.validateKey, _pinController.requestPin);
router.post('/verify/:id', _api.validateKey, _pinController.verify);

module.exports = router;