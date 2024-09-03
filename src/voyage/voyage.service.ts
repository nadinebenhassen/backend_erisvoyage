// src/voyage/voyage.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Voyage } from './voyage.schema';
import { CreateVoyageDto } from './create-voyage.dto';

@Injectable()
export class VoyageService {
  constructor(
    @InjectModel(Voyage.name) private readonly voyageModel: Model<Voyage>,
  ) {}

  async create(createVoyageDto: CreateVoyageDto): Promise<Voyage> {
    const newVoyage = new this.voyageModel(createVoyageDto);
    return newVoyage.save();
  }

  async findAll(): Promise<Voyage[]> {
    return this.voyageModel.find().exec();
  }

  async findOne(id: string): Promise<Voyage> {
    return this.voyageModel.findById(id).exec();
  }

  async update(id: string, updateVoyageDto: CreateVoyageDto): Promise<Voyage> {
    return this.voyageModel.findByIdAndUpdate(id, updateVoyageDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Voyage> {
    return this.voyageModel.findByIdAndDelete(id).exec();
  }
}
