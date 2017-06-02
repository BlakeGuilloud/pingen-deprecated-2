import Account from '../models/Account.model';

export async function postAccount(accountData) {
  let newAccount;

  try {
    newAccount = await Account.create(accountData);
  } catch (e) {
    return Promise.reject(e);
  }

  return Promise.resolve(newAccount);
}
