import { ZodSchema } from 'zod';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import { ErrorTypes } from '../middlewares/catalog';

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
  public async readOne(_id: string): Promise<T | null> {
    const listOne = await this._vehicleModel.readOne(_id);
    return listOne;
  }
  public async update(_id: string, obj: unknown): Promise<T & { _id:string }> {
    // verifica se as infos que vêm atendem o padrão solicitado
    const parsed2 = this._zodSchema.safeParse(obj);
    if (!parsed2.success) throw parsed2.error;
    const updateList = await this._vehicleModel.update(_id, parsed2.data);
    if (!updateList) throw new Error(ErrorTypes.EntityNotFound);
    return updateList as T & { _id:string };
  }
  public async delete(_id:string) {
    const deleteOne = await this._vehicleModel.delete(_id);
    if (!deleteOne) throw new Error(ErrorTypes.EntityNotFound);
    return deleteOne;
  }
}

export default VehicleService;