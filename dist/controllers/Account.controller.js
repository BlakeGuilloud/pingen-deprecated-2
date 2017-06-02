'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postAccount = postAccount;

var _Account = require('../db/services/Account.service');

var accountService = _interopRequireWildcard(_Account);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function postAccount(req, res) {
  return Promise.resolve(req).then(function (data) {
    return accountService.postAccount(data.body);
  }).then(function (data) {
    return console.log(data);
  });
}