import express from 'express';
import 'express-async-errors';
import errorsMiddleware from './middlewares/error';
import carsRouter from './routes/cars';

const app = express();

app.use(express.json());
app.use('/cars', carsRouter);
app.use(errorsMiddleware);

export default app;