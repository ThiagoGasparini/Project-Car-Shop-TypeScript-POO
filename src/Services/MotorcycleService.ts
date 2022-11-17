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

  public async getAll() {
    const motorcycleODM = new MotorcyclesODM();
    const motorcycles = await motorcycleODM.getAll();
    const motorcyclesArray = motorcycles.map((cyc) => this.createMotorcycle(cyc));
    return motorcyclesArray;
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcyclesODM();
    const motorcycles = await motorcycleODM.findById(id);
    return this.createMotorcycle(motorcycles);
  }
}

export default MotorcycleService;