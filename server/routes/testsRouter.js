const express = require('express');
const testsController = require('../controllers/testsController');

const testsRouter = express.Router();

testsRouter.get('/:featureId', testsController.retrieveTestsList, (req, res, next) => {
  res.status(200).json(res.locals.testsList);
});

testsRouter.post('/', testsController.createTest, (req, res, next) => {
  res.sendStatus(201);
});

testsRouter.patch('/', testsController.updateTest, (req, res, next) => {
  res.sendStatus(200);
});

testsRouter.use('*', (req, res) => res.status(404).send('Page not found'));

module.exports = testsRouter;