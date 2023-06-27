// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const db = require('../models/');

const userController = {
  registerUser: async (req, res, next) => {
    console.log('<--userController - registerUser is invoked-->');

    return next();
  },

  loginUser: async (req, res, next) => {
    console.log('<--userController - loginUser is invoked-->');

    return next();
  }
};

export default userController;