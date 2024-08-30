import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Omra, OmraDocument } from './omra.schema';
import { CreateOmraDto } from './create_omra.dto';
import { UpdateOmraDto } from './update_omra.dto';

@Injectable()
export class OmraService {
  constructor(@InjectModel(Omra.name) private omraModel: Model<OmraDocument>) {}

  // Créer un nouveau voyage de Omra
  async create(createOmraDto: CreateOmraDto): Promise<Omra> {
    const createdOmra = new this.omraModel(createOmraDto);
    return createdOmra.save();
  }

  // Récupérer tous les voyages de Omra
  async findAll(): Promise<Omra[]> {
    return this.omraModel.find().exec();
  }

  // Récupérer un voyage de Omra par ID
  async findById(id: string): Promise<Omra> {
    const omra = await this.omraModel.findById(id).exec();
    if (!omra) {
      throw new NotFoundException(`Omra with ID "${id}" not found`);
    }
    return omra;
  }

  // Mettre à jour un voyage de Omra par ID
  async update(id: string, updateOmraDto: UpdateOmraDto): Promise<Omra> {
    const updatedOmra = await this.omraModel.findByIdAndUpdate(id, updateOmraDto, { new: true }).exec();
    updatedOmra.save();
    if (!updatedOmra) {
      throw new NotFoundException(`Omra with ID "${id}" not found`);
    }
    return updatedOmra;
  }

  // Supprimer un voyage de Omra par ID
  async delete(id: string): Promise<Omra> {
    const deletedOmra = await this.omraModel.findByIdAndDelete(id).exec();
    if (!deletedOmra) {
      throw new NotFoundException(`Omra with ID "${id}" not found`);
    }
    return deletedOmra;
  }
}
