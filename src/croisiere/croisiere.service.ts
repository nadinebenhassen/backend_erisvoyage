import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Croisiere } from './croisiere.schema';
import { CreateCroisiereDto } from './create-croisiere.dto';

@Injectable()
export class CroisiereService {
  constructor(@InjectModel('Croisiere') private readonly croisiereModel: Model<Croisiere>) {}

  async create(createCroisiereDto: CreateCroisiereDto): Promise<Croisiere> {
    const createdCroisiere = new this.croisiereModel(createCroisiereDto);
    return createdCroisiere.save();
  }

  async findAll(): Promise<Croisiere[]> {
    return this.croisiereModel.find().exec();
  }

  async findOne(id: string): Promise<Croisiere> {
    const croisiere = await this.croisiereModel.findById(id).exec();
    if (!croisiere) {
      throw new NotFoundException(`Croisière with ID ${id} not found`);
    }
    return croisiere;
  }

  async update(id: string, updateCroisiereDto: CreateCroisiereDto): Promise<Croisiere> {
    const croisiere = await this.croisiereModel.findByIdAndUpdate(id, updateCroisiereDto, { new: true }).exec();
    if (!croisiere) {
      throw new NotFoundException(`Croisière with ID ${id} not found`);
    }
    return croisiere;
  }

  async remove(id: string): Promise<any> {
    const result = await this.croisiereModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Croisière with ID ${id} not found`);
    }
    return result;
  }
}
