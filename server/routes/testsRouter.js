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

// TODO: is the endpoint correct? should it just be /? /createTest?
testsRouter.post(
  "/",
  testsController.createTest,
  (req, res, next) => {
    return res.sendStatus(201);
  }
);

// TODO: is the endpoint correct? should it just be /? /updateTest?
testsRouter.patch("/", testsController.updateTest, (req, res, next) => {
  return res.sendStatus(200);
});

export default testsRouter;
