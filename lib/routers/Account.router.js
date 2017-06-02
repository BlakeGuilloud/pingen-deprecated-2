import express from 'express';

import * as accountController from '../controllers/Account.controller';

const router = express.Router();

router.post('/', accountController.postAccount);

module.exports = router;
