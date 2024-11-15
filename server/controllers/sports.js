import sportsModel from '../models/sports.js';
import { sendRes } from "../utils/common.js";

export const getAllScoringRules = async (req, res) => {
    // let searchKey = {
    //   ...req.query
    // }
    // console.log(req.query, 'searchkey')
  
    try {
        let response = await sportsModel.find({});
        console.log(response)
        const result = sendRes(true, "success", response);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(sendRes(false, error));
        }
}