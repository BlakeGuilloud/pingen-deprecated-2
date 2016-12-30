import { BadRequestError, NotFoundError } from 'tael';
import User from '../models/user.model';

export async function getUsers() {
  let users = await User.find();

  return Promise.resolve(users);
}

export async function verify(id, pin) {
  let user;

  try {
    user = await User.findById(id);
  } catch (err) {
    return Promise.reject(err);
  }

  if (user.pin != pin) return Promise.reject(new BadRequestError(`The PIN you entered is incorrect and/on the verify time has expired.`));

  return Promise.resolve(user);
}

export async function register(data) {
  let newUser;

  try {
    newUser = await User.create(data);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newUser);
}

export async function attachPin(id, pin) {
  let user;

  try {
    await User.findByIdAndUpdate(id, { pin });

    user = await User.findById(id);
  } catch (err) {
    return Promise.reject(err);
  }

  if (!user) return Promise.reject(new NotFoundError(`No user with id: ${id}`));

  return Promise.resolve(user);
}

export async function destroyPin(id) {
  let user;

  try {
    await User.findByIdAndUpdate(id, { pin: null });

    user = await User.findById(id);
  } catch (err) {
    return Promise.reject(err);
  }

  if (!user) return Promise.reject(new NotFoundError(`No user with id: ${id}`));

  return Promise.resolve(user);
}
