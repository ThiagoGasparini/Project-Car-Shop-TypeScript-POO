import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  motorcycleMock,
  motorcycleMockWithId,
  motorsOutput,
  motorList,
  motorDomain,
} from './mocks/motorcycleMock';

const ERROR_MOTOR = 'Motorcycle not found';

describe('Motor Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('When creating a motorcycle', function () {
    it('Creates a new motorcycle succesfully', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleMockWithId);

      const service = new MotorcycleService();
      const result = await service.create(motorcycleMock);
      expect(result).to.be.deep.equal(motorcycleMockWithId);
    });
  });

  describe('When searching all motorcycles', function () {
    it('Return all motorcycles succesfully', async function () {
      sinon.stub(Model, 'find').resolves(motorsOutput);

      const service = new MotorcycleService();
      const result = await service.getAll();
      expect(result).to.be.deep.equal(motorList);
    });
    it('Creates a new car failed', async function () {
      sinon.stub(Model, 'find').resolves();

      const service = new MotorcycleService();
      const result = await service.getAll();
  
      expect(result).to.be.deep.equal([]);
    });
  });

  describe('When searching a car', function () {
    it('Return a car succesfully', async function () {
      const id = '6348513f34c397abcad040b2';
      sinon.stub(Model, 'findOne').resolves(motorcycleMockWithId);

      const service = new MotorcycleService();
      const result = await service.findById(id);

      expect(result).to.be.deep.equal(motorDomain);
    });

    it('Fails to return a car', async function () {
      const id = '6348513f34c397abcad040b2';
      sinon.stub(Model, 'findOne').resolves();

      try {
        const service = new MotorcycleService();
        await service.findById(id);
      } catch (error) {
        expect((error as Error).message).to.be.equal(ERROR_MOTOR);
      }
    });
  });
});