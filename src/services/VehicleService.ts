import { ZodSchema } from 'zod';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class VehicleService<T> implements IService<T> {
  constructor(protected _vehicleModel:IModel<T>, protected _zodSchema:ZodSchema<T>) {
  }
  public async create(obj: T) {
    const parsed = this._zodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const created = await this._vehicleModel.create(parsed.data);
    return created;
  }
  public async read() {
    const listVehicle = await this._vehicleModel.read();
    return listVehicle;
  }
}

export default VehicleService;