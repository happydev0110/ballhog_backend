import express from 'express';

import userRouter from './users.js';
import gameRouter from './games.js';
import favouriteGameRouter from './favourites.js';
import sportsRouter from './sports.js';

import * as RuleCtrl from './rules/index.js';

const router = express.Router();

router.post('/getCheckedDS', RuleCtrl.getCheckedDS);
router.use('/', userRouter);
router.use('/games', gameRouter);
router.use('/favourites', favouriteGameRouter);
router.use('/sports', sportsRouter);

export default router;
