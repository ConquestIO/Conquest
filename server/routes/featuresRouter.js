import express from "express";
import featuresController from "../controllers/featuresController.js";

const featuresRouter = express.Router();

featuresRouter.get("/", featuresController.getFeaturesList, (req, res, next) =>
  res.status(200).json(res.locals.featuresList)
);

featuresRouter.post("/", featuresController.createFeature, featuresController.getFeaturesList, (req, res, next) =>
  res.status(201).json(res.locals.featuresList)
);

export default featuresRouter;
