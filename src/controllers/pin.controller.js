import * as PinService from '../services/pin.service';
import * as pinHelpers from '../helpers/pin.helpers';
import { SendSuccess, SendError } from 'tael';
import Shuttle from '../helpers/shuttle';

export function getUsers(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(PinService.getUsers))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function register(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(PinService.register, 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function requestPin(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(pinHelpers.generatePin)
    .then(pinHelpers.markToDestroy)
    .then(Shuttle.liftFunction(PinService.attachPin, 'params.id', 'data.pin'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function verify(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(PinService.verify, 'params.id', 'data.pin'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
