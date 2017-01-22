import * as PinService from '../services/pin.service';
import * as pinHelpers from '../helpers/pin.helpers';
import { SendSuccess, SendError } from 'tael';
import Fluyt from 'fluyt';

export function getUsers(req, res) {
  return Promise.resolve(Fluyt.liftRequest(req))
    .then(Fluyt.liftFunction(PinService.getUsers))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function register(req, res) {
  return Promise.resolve(Fluyt.liftRequest(req))
    .then(Fluyt.liftFunction(PinService.register, 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function requestPin(req, res) {
  return Promise.resolve(Fluyt.liftRequest(req))
    .then(pinHelpers.generatePin)
    .then(pinHelpers.markToDestroy)
    .then(Fluyt.liftFunction(PinService.attachPin, 'params.id', 'data.pin'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function verify(req, res) {
  return Promise.resolve(Fluyt.liftRequest(req))
    .then(Fluyt.liftFunction(PinService.verify, 'params.id', 'data.pin'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
