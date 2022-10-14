import { IMotorcycle, motorcycleZodSchema } from '../interfaces/IMotorcycle';
import MotorcyclesModel from '../models/MotorcyclesModel';
import VehicleService from './VehicleService';

class MotorcyclesService extends VehicleService<IMotorcycle> {
  constructor(protected _model = new MotorcyclesModel(), _zodSchema = motorcycleZodSchema) {
    super(_model, _zodSchema);
  }
}

export default MotorcyclesService;