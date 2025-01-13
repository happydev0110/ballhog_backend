import express from 'express';
import * as FavouriteCtrl from "../controllers/favourites.js";

const router = express.Router();
router.get('/', FavouriteCtrl.getFavouriteGameOne);
router.get('/many', FavouriteCtrl.getFavouriteGames);
router.get('/getTotalEntryPoints', FavouriteCtrl.getTotalEntryPoints);
router.post('/', FavouriteCtrl.addFavouriteGame);
router.put('/', FavouriteCtrl.updateOneFavouriteGame);
router.put('/many', FavouriteCtrl.updateManyFavouriteGames);
router.delete('/', FavouriteCtrl.deleteOneFavouriteGame);
router.delete('/many', FavouriteCtrl.deleteManyFavouriteGames);

export default router;
