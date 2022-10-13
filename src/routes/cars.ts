import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import CarsModel from '../models/CarsModel';
import CarsService from '../services/CarsService';

const route = Router();

const cars = new CarsModel();
const carsService = new CarsService(cars);
const carsController = new CarsController(carsService);

route.get('/:id', (req, res) => carsController.readOne(req, res));
route.get('/', (req, res) => carsController.read(req, res));
route.post('/', (req, res) => carsController.create(req, res));

export default route;