// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const db = require('../models/');

const userController = {
  registerUser: async (req, res, next) => {
      res.locals.userId = 1n;
      return next();
  },

  loginUser: async (req, res, next) => {
        res.locals.user = 1n;
        return next();
  }
};

export default userController;