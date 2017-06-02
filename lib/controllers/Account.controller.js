import { sendSuccess } from '../responses/successes';
import { sendError } from '../responses/errors';

import * as accountService from '../db/services/Account.service';

export function postAccount(req, res) {
  return Promise.resolve(req)
    .then((data) => accountService.postAccount(data.body))
    .then(sendSuccess(res))
    .catch(sendError(res));
}
