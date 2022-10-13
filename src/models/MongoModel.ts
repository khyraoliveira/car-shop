import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
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
  public async update(_id: string, obj: Partial<T>): Promise<T & { _id:string } | null> {
    const validationObjId = isValidObjectId(_id);
    if (!validationObjId) throw Error(ErrorTypes.InvalidMongoId);
    const retorno = this._model.findByIdAndUpdate(_id, { ...obj } as UpdateQuery<T>, { new: true });
    if (!retorno) return null;
    return retorno as unknown as T & { _id: string };
  }
  public async delete(_id: string): Promise<T | null> {
    const validationId = isValidObjectId(_id);
    if (!validationId) throw Error(ErrorTypes.InvalidMongoId);
    const deleteOne = await this._model.findByIdAndDelete({ _id });
    return deleteOne;
  }
}

export default MongoModel;