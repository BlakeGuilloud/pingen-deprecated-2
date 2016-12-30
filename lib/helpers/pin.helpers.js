'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.generatePin = generatePin;
exports.markToDestroy = markToDestroy;

var _pin = require('../services/pin.service');

var PinService = _interopRequireWildcard(_pin);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generatePin(shuttle) {
  var newShuttle = shuttle;
  var pinLength = newShuttle.data.pinLength || 1000000;

  newShuttle.data.pin = createPin(pinLength);

  return _promise2.default.resolve(newShuttle);
}

function markToDestroy(shuttle) {
  var newShuttle = shuttle;

  var timeout = newShuttle.data.timeout || 30000;

  setTimeout(function () {
    return PinService.destroyPin(newShuttle.params.id);
  }, timeout);

  return _promise2.default.resolve(newShuttle);
}

function createPin(pinLength) {
  var pin = Math.floor(Math.random() * pinLength);

  if (pin.toString()[0] == '0') {
    return createPin();
  }

  return pin;
}