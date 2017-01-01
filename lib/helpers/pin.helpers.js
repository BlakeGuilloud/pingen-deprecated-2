'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatePin = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var generatePin = exports.generatePin = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(shuttle) {
    var newShuttle, pinLength;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newShuttle = shuttle;
            pinLength = newShuttle.data.pinLength || 1000000;
            _context.next = 4;
            return createPin(pinLength);

          case 4:
            newShuttle.data.pin = _context.sent;
            return _context.abrupt('return', _promise2.default.resolve(newShuttle));

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function generatePin(_x) {
    return _ref.apply(this, arguments);
  };
}();

var createPin = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(pinLength) {
    var pin;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pin = Math.floor(Math.random() * pinLength);

            if (!(pin.toString()[0] == '0')) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt('return', createPin());

          case 3:
            return _context2.abrupt('return', pin);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createPin(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.markToDestroy = markToDestroy;

var _pin = require('../services/pin.service');

var PinService = _interopRequireWildcard(_pin);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function markToDestroy(shuttle) {
  var newShuttle = shuttle;
  var pinId = newShuttle.params.id;

  var timeout = newShuttle.data.timeout || 30000;

  setTimeout(function () {
    return PinService.destroyPin(pinId);
  }, timeout);

  return _promise2.default.resolve(newShuttle);
}