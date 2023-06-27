import db from '../models/testTrackerModel.js'

const featuresController = {
  getFeaturesList: async (req, res, next) => {
    console.log('<--featuresController - getFeaturesList is invoked-->');

    const { userId } = req.user;

    // const userId  = 1; // for testing

    try {
      const query = `SELECT _id AS id, feature_name, description, created_on FROM feature WHERE feature.user_id = $1;`;

      const data = await db.query(query, [userId]);

      console.log('data.rows', data.rows);
      // validate data
      if (!data.rows.length) throw new Error;

      res.locals.featuresList = await data.rows;

      return next();

    } catch (err) {
      return next({
        log: `Error in getFeaturesList controller method: ${err}`,
        status: 500,
        message: 'Error while retrieving data',
      });
    }

  },

  createFeature: async (req, res, next) => {
    console.log('<--featuresController - createFeature is invoked-->');

    return next();
  }

};

export default featuresController;