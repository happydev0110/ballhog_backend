import GameModel from '../models/games.js';
import { sendRes } from "../utils/common.js";

export const getGame = async (req, res) => {
  let searchKey = {
    ...req.params
  }

  try {
    let response = await GameModel.find(searchKey);
    const result = sendRes(true, "success", response.data)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const addGame = async (req, res) => {
  let data = new GameModel({ ...req.body });

  try {
    let response = await data.save();
    const result = sendRes(true, "success", response)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const updateManyGames = async (req, res) => {
  const { search, modify } = req.body;

  let searchKey = { ...search };
  let modifyData = { ...modify };

  try {
    let response = await GameModel.updateMany(searchKey, modifyData);
    const result = sendRes(true, "success", response.data)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const updateOneGame = async (req, res) => {
  const { search, modify } = req.body;

  let searchKey = { ...search };
  let modifyData = { ...modify };

  console.log(searchKey, modifyData)
  try {
    await GameModel.updateOne(searchKey, modifyData, { returnDocument: 'after' });
    const updateDoc = await GameModel.findOne(search);
    const result = sendRes(true, "success", updateDoc)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const deleteManyGames = async (req, res) => {
  let searchKey = { ...req.body };

  try {
    let response = await GameModel.deleteMany(searchKey);
    const result = sendRes(true, "success", response.data)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const deleteOneGame = async (req, res) => {
  let searchKey = { ...req.body };

  try {
    let response = await GameModel.deleteOne(searchKey);
    const result = sendRes(true, "success", response.data)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}