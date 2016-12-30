'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateKey = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var validateKey = exports.validateKey = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _api.validateApiKey)(req.query.api);

          case 2:
            if (!_context.sent) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', next());

          case 4:

            res.status(401).json({
              code: 401,
              message: 'Invalid API key'
            });

            return _context.abrupt('return', false);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function validateKey(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _api = require('../services/api.service');

var _tael = require('tael');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }