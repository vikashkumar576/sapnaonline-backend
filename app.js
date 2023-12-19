import 'dotenv/config'
import './modules/db.modules.js'
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import cors from 'cors'
const url = import.meta.url

//start here importing yoour file
import purchaseRouter from './routes/purchase.route.js';
import authorRouter from './routes/author.route.js';
import publisherRouter from './routes/publisher.route.js';
import bookRouter from './routes/book.route.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();

// view engine setup
app.set('views', path.join(path.dirname(url), 'views'));
app.set('view engine', 'jade');

app.use(cors({
  origin: '*'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.dirname(url), 'public')));

// here your middle as route
app.use('/api', purchaseRouter)
app.use('/api', authorRouter)
app.use('/api', publisherRouter)
app.use('/api', bookRouter)
app.use('/api', userRouter)
app.use('/api/auth', authRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

export default app;
