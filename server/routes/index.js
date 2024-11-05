import express from 'express';

import userRouter from './users.js';
import gameRouter from './games.js';

const router = express.Router();

router.use('/', userRouter);
router.use('/games', gameRouter);

export default router;
