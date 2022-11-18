import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carMock, carMockWithId, carsOutput, carList } from './mocks/carMocks';

const ERROR_CAR = 'Car not found';

describe('Car Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('When creating a car', function () {
    it('Creates a new car succesfully', async function () {
      sinon.stub(Model, 'create').resolves(carMockWithId);

      const service = new CarService();
      const result = await service.create(carMock);
      expect(result).to.be.deep.equal(carMockWithId);
    });
  });

  describe('When searching all cars', function () {
    it('Return all cars succesfully', async function () {
      sinon.stub(Model, 'find').resolves(carsOutput);

      const service = new CarService();
      const result = await service.getAll();
      expect(result).to.be.deep.equal(carList);
    });
  });

  describe('When searching a car', function () {
    it('Fails to return a car', async function () {
      const id = '6352f8ea74092b2e6a784c51';
      sinon.stub(Model, 'findOne').resolves();

      try {
        const service = new CarService();
        await service.findById(id);
      } catch (error) {
        expect((error as Error).message).to.be.equal(ERROR_CAR);
      }
    });
  });
});
