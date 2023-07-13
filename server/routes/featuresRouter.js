import express from "express";
import featuresController from "../controllers/featuresController.js";

const featuresRouter = express.Router();
// return list of features under user id
featuresRouter.get("/", featuresController.getFeaturesList, (req, res, next) =>
  res.status(200).json(res.locals.featuresList)
);
// create new feature under user id & return new list of features
featuresRouter.post("/", featuresController.createFeature, featuresController.getFeaturesList, (req, res, next) =>
  res.status(201).json(res.locals.featuresList)
);

export default featuresRouter;
