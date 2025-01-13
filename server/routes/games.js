import express from 'express';
import * as GameCtrl from "../controllers/games.js";

const router = express.Router();
router.get('/', GameCtrl.getGameOne);
router.get('/many', GameCtrl.getGames);
router.get('/getTotalEntryPoints', GameCtrl.getTotalEntryPoints);
router.post('/', GameCtrl.addGame);
router.put('/', GameCtrl.updateOneGame);
router.put('/many', GameCtrl.updateManyGames);
router.delete('/', GameCtrl.deleteOneGame);
router.delete('/many', GameCtrl.deleteManyGames);

export default router;
