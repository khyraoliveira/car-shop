import { ICar, carZodSchema } from '../interfaces/ICar';
import CarsModel from '../models/CarsModel';
import VehicleService from './VehicleService';

class CarsService extends VehicleService<ICar> {
  constructor(protected _model = new CarsModel(), _zodSchema = carZodSchema) {
    super(_model, _zodSchema);
  }
}

export default CarsService;