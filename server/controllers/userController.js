import { Request, Response, NextFunction, RequestHandler } from "express";
const db = require("../models/testTrackerModel");

const userController = {
  registerUser: async (req, res, next) => {},

  loginUser: async (req, res, next) => {},
};

module.exports = userController;
