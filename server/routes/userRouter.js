import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post(
  '/register',
  userController.registerUser,
  userController.loginUser,
  (req, res, next) => res.sendStatus(201)
);

userRouter.post(
  '/login',
  userController.loginUser,
  (req, res, next) => res.sendStatus(200)
);

userRouter.use('*', (req, res) => res.status(404).send('Page not found'));

export default userRouter;