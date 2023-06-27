import express from "express";
import featuresController from "../controllers/featuresController.js";

const featuresRouter = express.Router();

featuresRouter.get("/", featuresController.getFeaturesList, (req, res, next) =>
  res.status(200).json(res.locals.featuresList)
);

featuresRouter.post("/", featuresController.createFeature, (req, res, next) =>
  res.sendStatus(201)
);

export default featuresRouter;
