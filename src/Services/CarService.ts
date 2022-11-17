import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

class CarService {
  private createCar(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  private CarList(cars: ICar[] | null): Car[] | null {
    if (cars) {
      const carsList: Car[] = [];
      cars.forEach((car) => {
        const carDomain = this.createCar(car);
        carsList.push(carDomain as Car);
      });
      return carsList;
    }
    return null;
  }

  public async create(car: ICar) {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);
    return this.createCar(newCar);
  }

  public async getAll() {
    const carModel = new CarModel();
    const cars = await carModel.getAll();
    if (cars.length === 0) {
      throw new Error('Car not found');
    }
    return this.CarList(cars);
  }

  public async findById(id: string) {
    const carModel = new CarModel();
    const car = await carModel.findById(id);
    if (!car) {
      throw new Error('Car not found');
    }
    return this.createCar(car);
  }
}

export default CarService;