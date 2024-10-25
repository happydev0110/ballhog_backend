import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/users.js';
import { sendRes } from "../utils/common.js";

export const reigster = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password, 'user info')
    
    const existingUser = await UserModel.findOne({ email }); // Changed variable name to existingUser
    if (existingUser) {
      return res.status(400).json(sendRes(false, 'User already exists'));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

    res.json(sendRes(true, 'Register Success'));
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
      return res.status(401).json(sendRes(false, 'Invalid credentials'));
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json(sendRes(false, 'Invalid credentials'));
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, 'secret_key', {
      expiresIn: '1h',
    });

    // res.json({ token, email });
    res.json(sendRes(true, 'Login success', { token, email }));
  } catch (error) {
    console.error(error);
    // res.json({ message: 'Internal server error' });
    res.json(sendRes(false, 'Internal server error'));
  }
}

export const getUser = async (req, res) => {
    let searchKey = {
        ...req.params
    }

    try {
        let response = await userModel.find(searchKey);
        const result = sendRes(true, "success", response.data)
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(sendRes(false, error));
    }
}

export const addUser = async (req, res) => {
    let data = new userModel({ ...req.body });

    try {
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
        let response = await userModel.updateMany(searchKey, modifyData);
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

    try {
        let response = await userModel.updateOne(searchKey, modifyData);
        const result = sendRes(true, "success", response.data)
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(sendRes(false, error));
    }
}

export const deleteManyUsers = async (req, res) => {
    let searchKey = { ...req.body };

    try {
        let response = await userModel.deleteMany(searchKey);
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
        let response = await userModel.deleteOne(searchKey);
        const result = sendRes(true, "success", response.data)
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(sendRes(false, error));
    }
}