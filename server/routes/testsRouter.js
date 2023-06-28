import express from 'express';
import testsController from '../controllers/testsController.js';

const testsRouter = express.Router();

testsRouter.get(
  '/:featureId',
  testsController.getTestsList,
  (req, res, next) => {
    return res.status(200).json(res.locals.testList);
  }
);

testsRouter.post(
  '/',
  testsController.createTest,
  testsController.getTestsList,
  (req, res, next) => {
    return res.status(201).json(res.locals.testList);
  }
);

testsRouter.patch(
  '/',
  testsController.updateTest,
  testsController.getTestsList,
  (req, res, next) => {
    return res.status(200).json(res.locals.testList);
  }
);

export default testsRouter;
