import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/users.js';
import { sendRes } from "../utils/common.js";

export const reigster = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password, 'user info')

    const existingUserName = await UserModel.findOne({ name }).collation({ locale: 'en', strength: 2 }); // Changed variable name to existingUser
    if (existingUserName) {
      return res.json(sendRes(false, 'User Name already exists'));
    }

    const existingUserEmail = await UserModel.findOne({ email }); // Changed variable name to existingUser
    if (existingUserEmail) {
      return res.json(sendRes(false, 'Phone Number already exists'));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ email: newUser.email }, 'secret_key', {
      expiresIn: '1h',
    });

    res.json(sendRes(true, 'Register Success', { token, user: newUser }));
  } catch (error) {
    console.error(error);
    // res.json({ message: 'Internal server error' });
    res.json(sendRes(false, 'Internal server error'))
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      // return res.status(401).json({ message: 'Invalid credentials' });
      return res.json(sendRes(false, 'Phone Number is not correct.'));
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.json(sendRes(false, 'Password is not correct'));
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, 'secret_key', {
      expiresIn: '1h',
    });

    // res.json({ token, email });
    res.json(sendRes(true, 'Login success', { token, user }));
  } catch (error) {
    console.error(error);
    res.json(sendRes(false, 'Internal server error'));
  }
}

export const verifyCode = async (req, res) => {
  try {
    const { email, password, otp } = req.body;

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      // return res.status(401).json({ message: 'Invalid credentials' });
      return res.json(sendRes(false, 'Phone Number is not correct.'));
    }

    // Compare passwords
    // const passwordMatch = await bcrypt.compare(password, user.password);
    // if (!passwordMatch) {
    //   return res.json(sendRes(false, 'Password is not correct'));
    // }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, 'secret_key', {
      expiresIn: '1h',
    });

    // res.json({ token, email });
    res.json(sendRes(true, 'Login success', { token, user }));
  } catch (error) {
    console.error(error);
    res.json(sendRes(false, 'Internal server error'));
  }
}

export const getUser = async (req, res) => {
  let searchKey = {
    ...req.query
  }
  // console.log(req.query, 'searchkey')

  try {
    let response = await UserModel.find(searchKey);
    const result = sendRes(true, "success", response)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const getUserOne = async (req, res) => {
  let searchKey = {
    ...req.query
  }
  // console.log(req.query, 'searchkey')

  try {
    let response = await UserModel.findOne(searchKey);
    const result = sendRes(true, "success", response)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}


export const addUser = async (req, res) => {
  let data = new UserModel({ ...req.body });

  try {
    const existingUserName = await UserModel.findOne({ name: req.body.name }); // Changed variable name to existingUser
    if (existingUserName) {
      return res.json(sendRes(false, 'User Name already exists'));
    }

    const existingUserEmail = await UserModel.findOne({ email: req.body.email }); // Changed variable name to existingUser
    if (existingUserEmail) {
      return res.json(sendRes(false, 'User Email already exists'));
    }

    let response = await data.save();
    const result = sendRes(true, "success", response)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const updateManyUsers = async (req, res) => {
  const { search, modify } = req.body;

  let searchKey = { ...search };
  let modifyData = { ...modify };

  try {
    let response = await UserModel.updateMany(searchKey, modifyData);
    const result = sendRes(true, "success", response.data)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const updateOneUser = async (req, res) => {
  const { search, modify } = req.body;

  let searchKey = { ...search };
  let modifyData = { ...modify };

  console.log(searchKey, modifyData)
  try {
    await UserModel.updateOne(searchKey, modifyData, { returnDocument: 'after' });
    const updateDoc = await UserModel.findOne(search);
    const result = sendRes(true, "success", updateDoc)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const deleteManyUsers = async (req, res) => {
  let searchKey = { ...req.body };

  try {
    let response = await UserModel.deleteMany(searchKey);
    const result = sendRes(true, "success", response.data)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const deleteOneUser = async (req, res) => {
  let searchKey = { ...req.body };

  try {
    let response = await UserModel.deleteOne(searchKey);
    const result = sendRes(true, "success", response.data)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}