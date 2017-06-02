import * as accountService from '../db/services/Account.service';

export function postAccount(req, res) {
  return Promise.resolve(req)
    .then((data) => accountService.postAccount(data.body))
    .then((data) => console.log(data));
}
