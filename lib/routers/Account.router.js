import express from 'express';

import {
  postAccount,
} from '../controllers/Account.controller';

const router = express.Router();

router.post('/', postAccount);

module.exports = router;
