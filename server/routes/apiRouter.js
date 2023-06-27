const express = require('express');
const featuresRouter = require('./featuresRouter');
const testsRouter = require('./testsRouter');

const apiRouter = express.Router();

apiRouter.use('/:userId/features', featuresRouter);
apiRouter.use('/:userId/tests', testsRouter);

apiRouter.use('*', (req, res) => res.status(404).send('Page not found'));

module.exports = apiRouter;
