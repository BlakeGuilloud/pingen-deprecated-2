import * as PinService from '../services/pin.service';

export async function generatePin (shuttle) {
  const newShuttle = shuttle;
  const pinLength = newShuttle.data.pinLength || 1000000;

  newShuttle.data.pin = await createPin(pinLength);

  return Promise.resolve(newShuttle);
}

export function markToDestroy(shuttle) {
  const newShuttle = shuttle;
  const pinId = newShuttle.params.id;

  const timeout = newShuttle.data.timeout || 30000;

  setTimeout(() => PinService.destroyPin(pinId), timeout);

  return Promise.resolve(newShuttle);
}

async function createPin (pinLength) {
  const pin = Math.floor(Math.random() * pinLength);

  if (pin.toString()[0] == '0') {
    return createPin();
  }

  return pin;
}
