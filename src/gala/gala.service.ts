// src/gala/gala.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGalaDto } from './create-gala.dto';
import { Gala } from './gala.schema';

@Injectable()
export class GalaService {
  constructor(@InjectModel(Gala.name) private readonly galaModel: Model<Gala>) {}

  async create(createGalaDto: CreateGalaDto): Promise<Gala> {
    const newGala = new this.galaModel(createGalaDto);
    return newGala.save();
  }

  async findAll(): Promise<Gala[]> {
    return this.galaModel.find().exec();
  }

  async findOne(id: string): Promise<Gala> {
    const gala = await this.galaModel.findById(id).exec();
    if (!gala) {
      throw new NotFoundException(`Gala with ID ${id} not found`);
    }
    return gala;
  }

  async update(id: string, updateGalaDto: CreateGalaDto): Promise<Gala> {
    const updatedGala = await this.galaModel.findByIdAndUpdate(id, updateGalaDto, {
      new: true,
    });
    if (!updatedGala) {
      throw new NotFoundException(`Gala with ID ${id} not found`);
    }
    return updatedGala;
  }

  async remove(id: string): Promise<void> {
    const result = await this.galaModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Gala with ID ${id} not found`);
    }
  }
}
