import express from 'express';
import CarController from './Controllers/CarController';
import Errors from './Middlewares/Error';

const app = express();
app.use(express.json());

app.post('/cars', (req, res, next) =>
  new CarController(req, res, next).create());

app.get('/cars', (req, res, next) =>
  new CarController(req, res, next).getAll());

app.get('/cars/:id', (req, res, next) =>
  new CarController(req, res, next).findById());

app.use(Errors.handle);

export default app;
