import { ZodSchema } from 'zod';
import IModel from '../interfaces/IModel';
import IService from '../interfaces/IService';

class VehicleService<T> implements IService<T> {
  constructor(protected _vehicleModel:IModel<T>, protected _zodSchema:ZodSchema<T>) {
  }
  public async create(obj: T) {
    const parsed = this._zodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const created = this._vehicleModel.create(parsed.data);
    return created;
  }
}

export default VehicleService;