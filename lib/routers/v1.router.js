import { Router } from 'express';
import accountRouter from './Account.router';

const router = Router();

router.use('/accounts', accountRouter);

export default router;
