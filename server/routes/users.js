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

userRouter.get('/', UserCtrl.getUser);
userRouter.post('/', UserCtrl.addUser);
userRouter.put('/', UserCtrl.updateOneUser);
userRouter.put('/many', UserCtrl.updateManyUsers);
userRouter.delete('/', UserCtrl.deleteOneUser);
userRouter.delete('/many', UserCtrl.deleteManyUsers);

export default userRouter;

