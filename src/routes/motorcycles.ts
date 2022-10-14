import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcyclesModel from '../models/MotorcyclesModel';
import MotorcycleService from '../services/MotorcycleService';

const route = Router();

const motorcycles = new MotorcyclesModel();
const motorcycleService = new MotorcycleService(motorcycles);
const motorcycleController = new MotorcycleController(motorcycleService);

route.get('/:id', (req, res) => motorcycleController.readOne(req, res));
route.put('/:id', (req, res) => motorcycleController.update(req, res));
route.get('/', (req, res) => motorcycleController.read(req, res));
route.post('/', (req, res) => motorcycleController.create(req, res));
route.delete('/:id', (req, res) => motorcycleController.delete(req, res));

export default route;