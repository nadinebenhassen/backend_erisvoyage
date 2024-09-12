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

  // Create a new circuit
  async create(createCircuitDto: CreateCircuitDto): Promise<Circuit> {
    const createdCircuit = new this.circuitModel(createCircuitDto);
    return createdCircuit.save();
  }

  // Find all circuits
  async findAll(): Promise<Circuit[]> {
    return this.circuitModel.find().exec();
  }

  // Find a circuit by its ID
  async findOneById(id: string): Promise<Circuit> {
    const circuit = await this.circuitModel.findById(id).exec();
    if (!circuit) {
      throw new NotFoundException(`Circuit with ID "${id}" not found`);
    }
    return circuit;
  }

  // Update a circuit by its ID
  async update(id: string, updateCircuitDto: CreateCircuitDto): Promise<Circuit> {
    const updatedCircuit = await this.circuitModel
      .findByIdAndUpdate(id, updateCircuitDto, { new: true })
      .exec();
    if (!updatedCircuit) {
      throw new NotFoundException(`Circuit with ID "${id}" not found`);
    }
    return updatedCircuit;
  }

  // Remove a circuit by its ID
  async remove(id: string): Promise<Circuit> {
    const circuit = await this.circuitModel.findByIdAndDelete(id).exec();
    if (!circuit) {
      throw new NotFoundException(`Circuit with ID "${id}" not found`);
    }
    return circuit;
  }
}
