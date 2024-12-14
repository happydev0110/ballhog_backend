import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/users.js';
//import { filterUsername } from '../middlewares/authMiddleware.js';

import * as UserCtrl from "../controllers/users.js"
const userRouter = express.Router();

// User Registration
userRouter.post('/register', UserCtrl.reigster);
// User Login
userRouter.post('/login', UserCtrl.login);
userRouter.post('/verifyCode', UserCtrl.verifyCode);

userRouter.get('/users', UserCtrl.getUserOne);
userRouter.get('/users/many', UserCtrl.getUser);
userRouter.post('/users', UserCtrl.addUser);
userRouter.put('/users', UserCtrl.updateOneUser);
userRouter.put('/users/many', UserCtrl.updateManyUsers);
userRouter.delete('/users', UserCtrl.deleteOneUser);
userRouter.delete('/users/many', UserCtrl.deleteManyUsers);

export default userRouter;

