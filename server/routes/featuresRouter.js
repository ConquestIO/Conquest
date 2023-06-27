const express = require('express');
const featuresController = require('../controllers/featuresController');

const featuresRouter = express.Router();

featuresRouter.get('/', featuresController.retrieveFeaturesList, (req, res, next) => {
  res.status(200).json(res.locals.featuresList);
});

featuresRouter.post('/', featuresController.createFeature, (req, res, next) => {
  res.sendStatus(201);
});

featuresRouter.use('*', (req, res) => res.status(404).send('Page not found'));

module.exports = featuresRouter;
