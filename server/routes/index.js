import express from 'express';

import userRouter from './users.js';
import gameRouter from './games.js';
import sportsRouter from './sports.js';

const router = express.Router();

router.use('/', userRouter);
router.use('/games', gameRouter);
router.use('/sports', sportsRouter);

export default router;
