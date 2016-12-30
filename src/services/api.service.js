import { BadRequestError, NotFoundError } from 'tael';
import { generateKey } from '../helpers/api.helpers';
import Api from '../models/api.model';

export async function getApiKey() {
  let newKey;

  try {
    newKey = await Api.create({ key: generateKey() });
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newKey);
}

export async function validateApiKey(key) {
  let validKey;

  try {
    validKey = await Api.findOne({ key });
  } catch (err) {
    return Promise.reject(err);
  }

  if (!validKey) return false;

  return Promise.resolve(validKey);
}
