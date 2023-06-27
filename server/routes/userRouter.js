import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post(
  '/register',
  userController.registerUser,
  userController.loginUser,
  (req, res, next) => res.status(201).json(res.locals.userId)
);

userRouter.post(
  '/login',
  userController.loginUser,
  (req, res, next) => res.status(200).json(res.locals.userId)
);

userRouter.use('*', (req, res) => res.status(404).send('Page not found'));

export default userRouter;