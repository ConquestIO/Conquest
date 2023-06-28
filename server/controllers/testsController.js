import query from "../models/testTrackerModel.js";
//  JIMMY WAS HERE <3
const testsController = {
  getTestsList: async (req, res, next) => {
    console.log("<--testsController - getTestsList is invoked-->");
    const { feature_id } = req.params;

    // make a db query based on feauture id
    try {
      //?feature_id=1
      const text = `SELECT * FROM test WHERE feature_id = $1`;
      const values = [feature_id];
      const data = await query(text, values);

      // validate data
      if (!data.rows.length) throw new Error();
      res.locals.testList = await data.rows;
      //console.log res.locals to check structure
      // console.log(res.locals.testList);
      return next();
    } catch (err) {
      return next({
        log: `Error in getTestsList controller method: ${err}`,
        status: 500,
        message: "Error while retrieving data",
      });
    }
  },

  createTest: async (req, res, next) => {
    console.log("<--testsController - createTest is invoked-->");

    const { testName, description, status, category } = req.body;

    return next();
  },

  updateTest: async (req, res, next) => {
    console.log("<--testsController - updateTest is invoked-->");

    return next();
  },
};

export default testsController;
