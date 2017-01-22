import * as ApiService from '../services/api.service';
import { SendSuccess, SendError } from 'tael';
import Fluyt from 'fluyt';

export function getApiKey(req, res) {
  return Promise.resolve(Fluyt.liftRequest(req))
    .then(Fluyt.liftFunction(ApiService.getApiKey))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
