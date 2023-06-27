const testsController = {
  getTestsList: async(req, res, next) => {
    res.locals.testsList = [
                            {
                              id: 1n,
                              testName: 'unit test',
                              description: 'unit test details',
                              status: 'completed',
                              category: 'unitTest',
                              featureId: 1n,
                              createdOn: new Date(),
                            }
                          ];
    return next();
  },

  createTest: async(req, res, next) => {

    return next();

  },

  updateTest: async(req, res, next) => {

    return next();

  }

};

export default testsController;