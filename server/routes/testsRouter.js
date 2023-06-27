import express from 'express';
import testsController from '../controllers/testsController.js';

const testsRouter = express.Router();

testsRouter.get(
  '/:featureId',
  testsController.getTestsList,
  (req, res, next) => res.status(200).send(res.locals.testsList)
);

testsRouter.post(
  '/',
  testsController.createTest,
  (req, res, next) => res.sendStatus(201)
);

testsRouter.patch(
  '/',
  testsController.updateTest,
  (req, res, next) => res.sendStatus(200)
);

testsRouter.use('*', (req, res) => res.status(404).send('Page not found'));

export default testsRouter;
