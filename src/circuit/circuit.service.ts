import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Circuit } from './circuit.schema';
import { CreateCircuitDto } from './create-circuit.dto';

@Injectable()
export class CircuitService {
  constructor(
    @InjectModel(Circuit.name) private readonly circuitModel: Model<Circuit>,
  ) {}

  async create(createCircuitDto: CreateCircuitDto): Promise<Circuit> {
    const createdCircuit = new this.circuitModel(createCircuitDto);
    return createdCircuit.save();
  }

  async findAll(): Promise<Circuit[]> {
    return this.circuitModel.find().exec();
  }

  async findOneByTitre(titre: string): Promise<Circuit> {
    const circuit = await this.circuitModel.findOne({ titre }).exec();
    if (!circuit) {
      throw new NotFoundException(`Circuit with titre "${titre}" not found`);
    }
    return circuit;
  }

  async update(titre: string, updateCircuitDto: CreateCircuitDto): Promise<Circuit> {
    const updatedCircuit = await this.circuitModel
      .findOneAndUpdate({ titre }, updateCircuitDto, { new: true })
      .exec();
    if (!updatedCircuit) {
      throw new NotFoundException(`Circuit with titre "${titre}" not found`);
    }
    return updatedCircuit;
  }

  async remove(titre: string): Promise<Circuit> {
    const circuit = await this.circuitModel.findOneAndDelete({ titre }).exec();
    if (!circuit) {
      throw new NotFoundException(`Circuit with titre "${titre}" not found`);
    }
    return circuit;
  }
}
