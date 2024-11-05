import express from 'express';
import * as GameCtrl from "../controllers/games.js";

const gameRouter = express.Router();
gameRouter.get('/', GameCtrl.getUser);
gameRouter.post('/', GameCtrl.addUser);
gameRouter.put('/', GameCtrl.updateOneUser);
gameRouter.put('/many', GameCtrl.updateManyUsers);
gameRouter.delete('/', GameCtrl.deleteOneUser);
gameRouter.delete('/many', GameCtrl.deleteManyUsers);

export default gameRouter;

