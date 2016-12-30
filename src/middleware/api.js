import { validateApiKey } from '../services/api.service';
import { NotFoundError } from 'tael';

export async function validateKey(req, res, next) {
  if (await validateApiKey(req.query.api)) return next();

  res.status(401).json({
    code: 401,
    message: 'Invalid API key',
  });

  return false;
}
