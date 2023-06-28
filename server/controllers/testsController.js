import query from "../models/testTrackerModel.js";
const testsController = {
  getTestsList: async (req, res, next) => {
    console.log("<--testsController - getTestsList is invoked-->");
    const { featureId } = req.params;
    // make a db query based on feauture id
    try {
      const text = `SELECT * FROM test WHERE feature_id = $1`;

      const values = [featureId];
      const data = await query(text, values);
      res.locals.testList = data.rows;
      return next();
    } catch (err) {
      return next({
        log: `Error in getTestsList controller method: ${err}`,
        status: 500,
        message: "Error while retrieving tests",
      });
    }
  },

  createTest: async (req, res, next) => {
    console.log("<--testsController - createTest is invoked-->");

    const { featureId, testName, description, status, category } = req.body;

    try {
      const text = `INSERT INTO test(feature_id, test_name, description, status, category) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

      const values = [featureId, testName, description, status, category];

      const newTest = await query(text, values);
      req.params.featureId = featureId;

      // validate whether new Feature is successfully added to DB
      if (!newTest.rows.length) throw new Error();
      return next();
    } catch (err) {
      return next({
        log: `Error in createTest controller method: ${err}`,
        status: 500,
        message: "Error while adding new test",
      });
    }
  },

  updateTest: async (req, res, next) => {
    console.log("<--testsController - updateTest is invoked-->");
    const { id, status, category, featureId } = req.body;

    try {
      const text = `UPDATE test SET status = $2, category = $3 WHERE _id = $1 AND feature_id = $4`;

      const values = [id, status, category, featureId];
      
      const updatedTest = await query(text, values);
      req.params.featureId = featureId;
      return next();
    } catch (err) {
      return next({
        log: `Error in updateTest controller method: ${err}`,
        status: 500,
        message: "Error while updating test",
      });
    }
  },
};

export default testsController;
