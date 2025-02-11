import express from 'express';

import userRouter from './users.js';
import gameRouter from './games.js';
import favouriteGameRouter from './favourites.js';
import sportsRouter from './sports.js';

const router = express.Router();

router.use('/', userRouter);
router.use('/games', gameRouter);
router.use('/favourites', favouriteGameRouter);
router.use('/sports', sportsRouter);

export default router;
