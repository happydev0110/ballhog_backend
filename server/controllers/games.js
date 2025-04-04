import mongoose from 'mongoose';
import GameModel from '../models/games.js';
import { sendRes } from "../utils/common.js";

export const getGameOne = async (req, res) => {
  let searchKey = {
    ...req.query
  }

  try {
    let response = await GameModel.findOne(searchKey).populate('player');
    const result = sendRes(true, "success", response)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const getTotalEntryPoints = async (req, res) => {
  const { player, win } = req.query;
  try {
    let response = await GameModel.aggregate([
      {
        $match: {
          player: new mongoose.Types.ObjectId(player),
          win: parseInt(win)
        }
      },
      {
        $group: {
          _id: null, // No grouping key, as we want the sum for all matched documents
          totalEntryPoints: { $sum: "$entryPoint" } // Summing the `entryPoint` field
        }
      }
    ]);

    const totalEntryPoints = response.length > 0 ? response[0].totalEntryPoints : 0;
    const result = sendRes(true, "success", { totalEntryPoints })
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}

export const getGames = async (req, res) => {
  // Default values for pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;

  let searchKey = {
    ...req.query
  }

  // Remove page and limit keys from searchKey to avoid conflicts in the query
  delete searchKey.page;
  delete searchKey.limit;

  try {
    let response = await GameModel.find(searchKey).populate('player').sort({ createdAt: -1 }).limit(limit).skip(skip);
    const totalCount = await GameModel.countDocuments(searchKey);
    // const totalPages = Math.ceil(totalCount / limit);

    const result = sendRes(true, "success", {
      games: response,
      totalGames: totalCount,
      // totalPages: totalPages,
      currentPage: page
    })
    // const result = sendRes(true, "success", response)
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
  let searchKey = { ...req.query };

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
  let searchKey = { ...req.query };

  try {
    let response = await GameModel.deleteOne(searchKey);
    const result = sendRes(true, "success", response.data)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(sendRes(false, error));
  }
}
