import { Router } from 'express';
import MotorcyclesController from '../controllers/MotorcyclesController';
import MotorcyclesModel from '../models/MotorcyclesModel';
import MotorcyclesService from '../services/MotorcyclesService';

const route = Router();

const motorcycles = new MotorcyclesModel();
const motorcyclesService = new MotorcyclesService(motorcycles);
const motorcyclesController = new MotorcyclesController(motorcyclesService);

route.get('/:id', (req, res) => motorcyclesController.readOne(req, res));
route.put('/:id', (req, res) => motorcyclesController.update(req, res));
route.get('/', (req, res) => motorcyclesController.read(req, res));
route.post('/', (req, res) => motorcyclesController.create(req, res));
route.delete('/:id', (req, res) => motorcyclesController.delete(req, res));

export default route;