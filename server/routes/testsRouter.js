import express from 'express';
import testsController from '../controllers/testsController.js';

const testsRouter = express.Router();
// return list of tests under feature id
testsRouter.get(
  '/:featureId',
  testsController.getTestsList,
  (req, res, next) => {
    return res.status(200).json(res.locals.testList);
  }
);
// create a new test & return new list of tests under feature id
testsRouter.post(
  '/',
  testsController.createTest,
  testsController.getTestsList,
  (req, res, next) => {
    return res.status(201).json(res.locals.testList);
  }
);
// update test & return new list of tests under feature id
testsRouter.patch(
  '/',
  testsController.updateTest,
  testsController.getTestsList,
  (req, res, next) => {
    return res.status(200).json(res.locals.testList);
  }
);

export default testsRouter;
