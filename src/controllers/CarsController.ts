import { ICar } from '../interfaces/ICar';
import VehicleController from './VehicleController';

class CarsController extends VehicleController<ICar> {
  constructor(_service = new CarsServices()) {
    super(_service);
  }
}

export default CarsController;