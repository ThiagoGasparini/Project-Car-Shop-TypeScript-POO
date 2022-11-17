import { model, Model, models, Schema, isValidObjectId, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find({});
  }

  public async findById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    return this.model.findOne({ _id: id });
  }

  public async update(_id: string, obj: Partial<ICar>): Promise<ICar | null> {
    if (!isValidObjectId(_id)) throw new Error('Invalid mongo id');
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<ICar>,
      { new: true },
    );
  }
}

export default CarModel;