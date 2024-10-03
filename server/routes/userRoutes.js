import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';
//import { filterUsername } from '../middlewares/authMiddleware.js';

import * as UserCtrl from "../controllers/user.js"
const router = express.Router();

// User Registration
router.post('/register', UserCtrl.register);

// User Login
router.post('/login', UserCtrl.login);


export default router;

