import express from 'express';
// import authenticateController from '../controllers/authenticateController';
import userController from '../controllers/userController';

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
  (req, res, next) => res.status(204).json(res.locals.userId));

// userRouter.get(
//   '/authenticate',
  // authenticateController.authenticate,
  // userController.userInfo,
//   (req, res, next) => res.status(200).send(res.locals.user),
// );

userRouter.use('*', (req, res) => res.status(404).send('Page not found'));

module.exports = userRouter;
