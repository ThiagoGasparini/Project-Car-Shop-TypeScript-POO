import Motorcycle from '../../../src/Domains/Vehicle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import { validMotorcycle } from '../../utils/MotorcyclesMock';

const newMotorcycle: IMotorcycle = validMotorcycle;
const motorcycle: Motorcycle = new Motorcycle(newMotorcycle);
motorcycle.category;
motorcycle.engineCapacity;
