// template para criação dos testes de cobertura da camada de controller

import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import CarsController from '../../../controllers/CarsController';
const { expect } = chai;


describe('Testando Model', () => {
  const stub = { create: sinon.stub().resolves({
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }), find: sinon.stub().resolves([{
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }]), findByIdAndDelete: sinon.stub().resolves({
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }) }
  const req = {body: { 
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }};
  const res = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
  res.status = sinon.stub().returns(res);

  const cars = new CarsModel(stub as never);
  // as never tira qq tipagem que exista.
  const carsService = new CarsService(cars);
  const carsController = new CarsController(carsService);

  before(async () => {
    sinon
      .stub()
      .resolves();
  });

  after(()=>{
    sinon.restore();
  })

  it('create', async () => {
    const resultCar = await carsController.create(req as never, res as never);
    expect(resultCar).to.deep.eq({
      _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
    })
  });

  it('find', async () => {
    const resultCar = await carsController.read(req as never, res as never);
    expect(resultCar).to.deep.eq([{
      _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
    }])
  });

  it('delete', async () => {
    const resultCar = await carsController.delete({ params: { id: "4edd40c86762e0fb12000003" } } as never, { sendStatus: sinon.stub().callsFake((arg) => arg) } as never);
    expect(resultCar).to.deep.eq(204)
  });
});