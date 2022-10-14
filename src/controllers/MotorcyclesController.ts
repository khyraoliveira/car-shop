import { IMotorcycle } from '../interfaces/IMotorcycle';
import MotorcyclesService from '../services/MotorcyclesService';
import VehicleController from './VehicleController';

class MotorcyclesController extends VehicleController<IMotorcycle> {
  constructor(_service = new MotorcyclesService()) {
    super(_service);
  }
}

export default MotorcyclesController;