// const jwt = require('jsonwebtoken');

const authenticateController = {
  authenticateUser: async(req, res, next) => {
    console.log('<--authenticateController - authenticateUser is invoked-->');

    next();
  }

}

export default authenticateController;