import express from 'express';
import CarController from './Controllers/CarController';
import MotorcycleController from './Controllers/MotorcycleController';
import Errors from './Middlewares/Error';

const app = express();
app.use(express.json());

app.post('/cars', (req, res, next) =>
  new CarController(req, res, next).create());

app.get('/cars', (req, res, next) =>
  new CarController(req, res, next).getAll());

app.get('/cars/:id', (req, res, next) =>
  new CarController(req, res, next).findById());

app.put('/cars/:id', (req, res, next) =>
  new CarController(req, res, next).update());

app.post('/motorcycles', (req, res, next) =>
  new MotorcycleController(req, res, next).create());

app.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);
  
app.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

app.use(Errors.handle);

export default app;
