// const db = require('../models/');

const featuresController = {
  getFeaturesList: async (req, res, next) => {
    console.log('<--featuresController - getFeaturesList is invoked-->');

    res.locals.featuresList = [];

    return next();
  },

  createFeature: async (req, res, next) => {
    console.log('<--featuresController - createFeature is invoked-->');

    return next();
  }

};

export default featuresController;