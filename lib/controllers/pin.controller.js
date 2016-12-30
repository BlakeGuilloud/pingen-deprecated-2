'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.getUsers = getUsers;
exports.register = register;
exports.requestPin = requestPin;
exports.verify = verify;

var _pin = require('../services/pin.service');

var PinService = _interopRequireWildcard(_pin);

var _pin2 = require('../helpers/pin.helpers');

var pinHelpers = _interopRequireWildcard(_pin2);

var _tael = require('tael');

var _shuttle = require('../helpers/shuttle');

var _shuttle2 = _interopRequireDefault(_shuttle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUsers(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(_shuttle2.default.liftFunction(PinService.getUsers)).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function register(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(_shuttle2.default.liftFunction(PinService.register, 'data')).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function requestPin(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(pinHelpers.generatePin).then(pinHelpers.markToDestroy).then(_shuttle2.default.liftFunction(PinService.attachPin, 'params.id', 'data.pin')).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function verify(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(_shuttle2.default.liftFunction(PinService.verify, 'params.id', 'data.pin')).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}