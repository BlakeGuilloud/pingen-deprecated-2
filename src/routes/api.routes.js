import express from 'express';
const router = express.Router();

// import { getApiKey } from '../controllers/api.controller.js';
//
// router.get('/', (getApiKey));
router.get('/', (req, res) => {
  res.status(401).json({
    code: 401,
    message: 'Invalid API key',
  });

  return false;
});

module.exports = router;
