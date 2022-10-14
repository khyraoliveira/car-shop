import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motorcyclesMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
  status: Boolean,
}, { versionKey: false });

class MotorcyclesModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('motorcycles', motorcyclesMongooseSchema)) {
    super(model);
  }
}

export default MotorcyclesModel;