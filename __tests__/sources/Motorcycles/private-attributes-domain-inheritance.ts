import Motorcycle from '../../../src/Domains/Vehicle';

class subMotorcycleTest extends Motorcycle {
  public getCategory() {
    return this.category;
  }
  public getEngineCapacity() {
    return this.engineCapacity;
  }
}