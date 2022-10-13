import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motocycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
  status: Boolean,
}, { versionKey: false });

class MotocycleModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('motocycles', motocycleMongooseSchema)) {
    super(model);
  }
}

export default MotocycleModel;