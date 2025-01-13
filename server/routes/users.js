import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/users.js';
//import { filterUsername } from '../middlewares/authMiddleware.js';

import * as UserCtrl from "../controllers/users.js"
const router = express.Router();

// User Registration
router.post('/register', UserCtrl.reigster);
// User Login
router.post('/login', UserCtrl.login);
router.post('/verifyCode', UserCtrl.verifyCode);

router.get('/users', UserCtrl.getUserOne);
router.get('/users/many', UserCtrl.getUser);
router.post('/users', UserCtrl.addUser);
router.put('/users', UserCtrl.updateOneUser);
router.put('/users/many', UserCtrl.updateManyUsers);
router.delete('/users', UserCtrl.deleteOneUser);
router.delete('/users/many', UserCtrl.deleteManyUsers);

export default router;
