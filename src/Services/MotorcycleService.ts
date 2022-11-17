import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesModel';

class MotorcycleService {
  private createMotorcycle(motorcycle: IMotorcycle | null): Motorcycle | null | undefined {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleModel = new MotorcyclesODM();
    const motorcycles = await motorcycleModel.create(motorcycle);
    return this.createMotorcycle(motorcycles);
  }
}

export default MotorcycleService;