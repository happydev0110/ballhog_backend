import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/users.js';
//import { filterUsername } from '../middlewares/authMiddleware.js';

import * as SportsCtrl from "../controllers/sports.js"
const router = express.Router();

router.get('/getallscoringrules', SportsCtrl.getAllScoringRules);

export default router;
