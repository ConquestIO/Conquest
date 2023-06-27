const testsController = {
  getTestsList: async(req, res, next) => {
    console.log('<--testsController - getTestsList is invoked-->');

    res.locals.testsList = [];

    return next();
  },

  createTest: async(req, res, next) => {
    console.log('<--testsController - createTest is invoked-->');

    return next();

  },

  updateTest: async(req, res, next) => {
    console.log('<--testsController - updateTest is invoked-->');

    return next();

  }

};

export default testsController;