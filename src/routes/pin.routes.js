import express from 'express';
const router = express.Router();
import { getUsers, register, requestPin, verify } from '../controllers/pin.controller.js';
import { validateKey } from '../middleware/api';

router.get('/', validateKey, getUsers);
router.post('/', validateKey, register);
router.post('/:id', validateKey, requestPin);
router.post('/verify/:id', validateKey, verify);

module.exports = router;
