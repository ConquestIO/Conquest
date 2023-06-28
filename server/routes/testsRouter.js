import express from "express";
import testsController from "../controllers/testsController.js";

const testsRouter = express.Router();

testsRouter.get(
  "/:feature_id",
  testsController.getTestsList,
  (req, res, next) => {
    //console.log('made it to test get Router');
    return res.status(200).json(res.locals.testsList);
  }
);

testsRouter.post("/", testsController.createTest, (req, res, next) => {
  return res.sendStatus(201).json();
});
//  Hi Scott & Kinski
testsRouter.patch("/", testsController.updateTest, (req, res, next) => {
  return res.sendStatus(200).json();
});

export default testsRouter;
