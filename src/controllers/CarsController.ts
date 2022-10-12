import { ICar } from '../interfaces/ICar';
import CarsService from '../services/CarsService';
import VehicleController from './VehicleController';

class CarsController extends VehicleController<ICar> {
  constructor(_service = new CarsService()) {
    super(_service);
  }
}

export default CarsController;