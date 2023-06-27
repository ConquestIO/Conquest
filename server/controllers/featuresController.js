import { Request, Response, NextFunction, RequestHandler } from 'express';
const db = require("../models/testTrackerModel");

const featuresController = {
  retrieveFeaturesList: async (req, res, next) => {},

  createFeature: async (req, res, next) => {},
};

module.exports = featuresController;
