// const db = require('../models/');

const featuresController = {
  getFeaturesList: async (req, res, next) => {

    res.locals.featuresList = [
                                {
                                  id: 1n,
                                  featureName: 'signup',
                                  description: 'signup modal',
                                  createdOn: new Date(),
                                  userId: 1n,
                                }
                              ]

    return next();
  },

  createFeature: async (req, res, next) => {
    return next();
  }

};

export default featuresController;