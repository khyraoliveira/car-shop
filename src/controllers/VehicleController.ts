import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';

abstract class VehicleController<T> {
  constructor(protected _service: IService<T>) {}
  public async create(req: Request, res: Response<T>) {
    const catchInfo = req.body;
    const createdVehicle = await this._service.create(catchInfo);
    return res.status(201).json(createdVehicle);
  }
  public async read(req: Request, res: Response<T[]>) {
    const listVehicle = await this._service.read();
    return res.status(200).json(listVehicle);
  }
  public async readOne(req: Request, res: Response<T | null>) {
    const { id } = req.params;
    const listOne = await this._service.readOne(id);
    return res.status(200).json(listOne);
  }
  public async update(req: Request, res: Response<T | null>) {
    const { body } = req;
    const { id } = req.params;
    const updateList = await this._service.update(id, body);
    return res.status(200).json(updateList);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.delete(id);
    return res.sendStatus(204);
  }
}

export default VehicleController;