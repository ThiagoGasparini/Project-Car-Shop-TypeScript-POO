import ICar from '../../../../src/Interfaces/ICar';
import Car from '../../../../src/Domains/Car';

const carMock: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carMockWithId: ICar = {
  id: '6352f8ea74092b2e6a784c51',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carsOutput: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const carDomain: Car = new Car(carsOutput[0]);

export const otherCarDomain: Car = new Car(carsOutput[1]);

export const carList: Car[] = [
  carDomain,
  otherCarDomain,
];

export {
  carMock,
  carMockWithId,
  carsOutput,
};
