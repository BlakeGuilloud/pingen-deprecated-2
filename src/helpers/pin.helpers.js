import * as PinService from '../services/pin.service';

export function generatePin (shuttle) {
  const newShuttle = shuttle;
  const pinLength = newShuttle.data.pinLength || 1000000;

  newShuttle.data.pin = createPin(pinLength);

  return Promise.resolve(newShuttle);
}

export function markToDestroy(shuttle) {
  const newShuttle = shuttle;

  const timeout = newShuttle.data.timeout || 30000;

  setTimeout(() => PinService.destroyPin(newShuttle.params.id), timeout);

  return Promise.resolve(newShuttle);
}

function createPin (pinLength) {
  const pin = Math.floor(Math.random() * pinLength);

  if (pin.toString()[0] == '0') {
    return createPin();
  }

  return pin;
}
