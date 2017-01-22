'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.getApiKey = getApiKey;

var _api = require('../services/api.service');

var ApiService = _interopRequireWildcard(_api);

var _tael = require('tael');

var _fluyt = require('fluyt');

var _fluyt2 = _interopRequireDefault(_fluyt);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getApiKey(req, res) {
  return _promise2.default.resolve(_fluyt2.default.liftRequest(req)).then(_fluyt2.default.liftFunction(ApiService.getApiKey)).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}