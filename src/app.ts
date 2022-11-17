import express from 'express';
import CarController from './Controllers/CarController';

const app = express();
app.use(express.json());

app.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

export default app;
