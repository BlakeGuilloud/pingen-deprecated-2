'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateApiKey = exports.getApiKey = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getApiKey = exports.getApiKey = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var newKey;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newKey = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _api3.default.create({ apiKey: (0, _api.generateKey)() });

          case 4:
            newKey = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            return _context.abrupt('return', _promise2.default.reject(_context.t0));

          case 10:
            return _context.abrupt('return', _promise2.default.resolve(newKey));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function getApiKey() {
    return _ref.apply(this, arguments);
  };
}();

var validateApiKey = exports.validateApiKey = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(key) {
    var validKey;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            validKey = void 0;
            _context2.prev = 1;
            _context2.next = 4;
            return _api3.default.findOne({ key: key });

          case 4:
            validKey = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);
            return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

          case 10:
            if (validKey) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt('return', false);

          case 12:
            return _context2.abrupt('return', _promise2.default.resolve(validKey));

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 7]]);
  }));

  return function validateApiKey(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _tael = require('tael');

var _api = require('../helpers/api.helpers');

var _api2 = require('../models/api.model');

var _api3 = _interopRequireDefault(_api2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }