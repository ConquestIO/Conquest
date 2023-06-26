import express from 'express';
import path from 'path';
const app = express();
import userRouter from './routes/userRouter';
import apiRouter from './routes/apiRouter';
// import authController from './controllers/authController';
import cookieParser from 'cookie-parser';

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//request to router
app.use('/test', (req,res) => res.send('IT WORKS'));

app.use('/users', userRouter);
app.use('/api', apiRouter);

// if running from production, serve bundled files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(path.resolve(), 'dist')));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(path.resolve(), 'dist', 'index.html'));
  });
}

//catch-all route handler for any requests
app.use('*', (req, res) => res.status(404).send('This page does not exist'));

//express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
export default app.listen(PORT, () => console.log('listening on port ', PORT));
