import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;
  constructor(model:Model<T>) {
    this._model = model;
  }
  public async create(obj: T): Promise<T & { _id:string }> {
    const created = await this._model.create({ ...obj });
    return created as T & { _id:string };
  }
  public async read():Promise<T[]> {
    const list = await this._model.find();
    return list;
  }
}

export default MongoModel;