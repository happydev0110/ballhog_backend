import express from 'express';

import userRouter from './users.js';
// import brandRouter from './brands.js';
// import styleRouter from './styles.js';
// import productRouter from './products.js';
// import websiteRouter from './websites.js';
// import scrappingTargetRouter from "./scrappingTargets.js";
// import scrapeRouter from "./scrape.js";

const router = express.Router();

router.use('/', userRouter);

// router.use('/brand', brandRouter);
// router.use('/style', styleRouter);
// router.use('/products', productRouter);
// router.use('/websites', websiteRouter);
// router.use('/scrappingTargets', scrappingTargetRouter)

// router.use('/scrape', scrapeRouter)


export default router;
