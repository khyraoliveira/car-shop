import { IMotorcycle } from '../interfaces/IMotorcycle';
import MotorcycleService from '../services/MotorcycleService';
import VehicleController from './VehicleController';

class MotorcycleController extends VehicleController<IMotorcycle> {
  constructor(_service = new MotorcycleService()) {
    super(_service);
  }
}

export default MotorcycleController;