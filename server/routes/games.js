import express from 'express';
import * as GameCtrl from "../controllers/games.js";

const gameRouter = express.Router();
gameRouter.get('/', GameCtrl.getGame);
gameRouter.post('/', GameCtrl.addGame);
gameRouter.put('/', GameCtrl.updateOneGame);
gameRouter.put('/many', GameCtrl.updateManyGames);
gameRouter.delete('/', GameCtrl.deleteOneGame);
gameRouter.delete('/many', GameCtrl.deleteManyGames);

export default gameRouter;
