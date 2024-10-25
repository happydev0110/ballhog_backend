import express from 'express';
import * as styleCtrl from "../controllers/styles.js"

const styleRouter = express.Router();

// Products API
styleRouter.get('/', styleCtrl.getStyle);
styleRouter.post('/', styleCtrl.addStyle);
styleRouter.put('/', styleCtrl.updateOneStyle);
styleRouter.put('/many', styleCtrl.updateManyStyles);
styleRouter.delete('/', styleCtrl.deleteOneStyle);
styleRouter.delete('/many', styleCtrl.deleteManyStyles);

export default styleRouter;

