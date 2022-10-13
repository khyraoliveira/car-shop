import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../middlewares/catalog';

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
  public async readOne(_id: string): Promise<T | null> {
    // verifica se o id existe no banco e retorna 'true' ou 'false'
    const validationId = isValidObjectId(_id);
    if (!validationId) throw Error(ErrorTypes.InvalidMongoId);
    const listOne = await this._model.findOne();
    if (!listOne) throw Error(ErrorTypes.EntityNotFound);
    return listOne;
  }
}

export default MongoModel;