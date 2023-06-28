import express from "express";
import featuresRouter from "./featuresRouter.js";
import testsRouter from "./testsRouter.js";

const apiRouter = express.Router();

apiRouter.use("/features", featuresRouter);
apiRouter.use("/tests", testsRouter);

export default apiRouter;
