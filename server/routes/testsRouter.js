import express from "express";
import testsController from "../controllers/testsController.js";

const testsRouter = express.Router();

testsRouter.get(
  "/:feature_id",
  testsController.getTestsList,
  (req, res, next) => {
    return res.status(200).json(res.locals.testList);
  }
);

testsRouter.post("/", testsController.createTest, testsController.getTestsList, (req, res, next) => {
  return res.status(201).json(res.locals.testList);
});

testsRouter.patch("/", testsController.updateTest, (req, res, next) => {
  return res.sendStatus(200);
});

export default testsRouter;
