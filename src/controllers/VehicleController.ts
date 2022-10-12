import { Request, Response } from 'express';
import IService from '../interfaces/IService';

abstract class VehicleController<T> {
  constructor(protected _service: IService<T>) {}
  public async create(req: Request, res: Response<T>) {
    const catchInfo = req.body;
    const createdVehicle = await this._service.create(catchInfo);
    return res.status(201).json(createdVehicle);
  }
}

export default VehicleController;