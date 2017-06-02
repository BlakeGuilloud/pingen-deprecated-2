'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postAccount = undefined;

var postAccount = exports.postAccount = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(accountData) {
    var newAccount;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newAccount = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _Account2.default.create(accountData);

          case 4:
            newAccount = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            return _context.abrupt('return', Promise.reject(_context.t0));

          case 10:
            return _context.abrupt('return', newAccount);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function postAccount(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _Account = require('../models/Account.model');

var _Account2 = _interopRequireDefault(_Account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }