import * as ApiService from '../services/api.service';
import { SendSuccess, SendError } from 'tael';
import Shuttle from '../helpers/shuttle';

export function getApiKey(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(ApiService.getApiKey))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
