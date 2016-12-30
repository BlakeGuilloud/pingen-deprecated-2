'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Shuttle = function Shuttle() {
  (0, _classCallCheck3.default)(this, Shuttle);

  this.params = {};
  this.data = {};
};

exports.default = Shuttle;


Shuttle.prototype = (0, _create2.default)(Shuttle.prototype);
Shuttle.prototype.constructor = Shuttle;

Shuttle.liftRequest = function (req) {
  var s = new Shuttle();

  s.params = req.params;
  s.data = req.body;

  return _promise2.default.resolve(s);
};

Shuttle.liftFunction = function (fn) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(shuttle) {
      var args, i, deepKey, val, splitKey, j, key, newShuttle, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              args = [];


              for (i = 0; i < keys.length; i++) {
                deepKey = keys[i];


                if (deepKey === null) {
                  args.push(null);
                } else {
                  val = null;
                  splitKey = deepKey.split('.');


                  for (j = 0; j < splitKey.length; j++) {
                    key = splitKey[j];


                    if (j === 0) {
                      val = shuttle[key];
                    } else {
                      val = val[key];
                    }
                  }

                  args.push(val);
                }
              }
              newShuttle = shuttle;
              _context.next = 5;
              return fn.apply(undefined, args);

            case 5:
              result = _context.sent;


              newShuttle.data = result;

              return _context.abrupt('return', _promise2.default.resolve(newShuttle));

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};