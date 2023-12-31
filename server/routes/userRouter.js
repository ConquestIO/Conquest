import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

// return jwt token & username to user after successful registration or login
userRouter.post("/register", userController.registerUser, userController.loginUser, (req, res) => res.status(201).json(res.locals.user));

userRouter.post("/login", userController.loginUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

export default userRouter;
