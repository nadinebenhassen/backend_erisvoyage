import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Demande, DemandeDocument } from './demande.schema';
import { CreateDemandeDto } from './createdemande.dto';

@Injectable()
export class DemandeService {
  constructor(
    @InjectModel(Demande.name) private demandeModel: Model<DemandeDocument>,
  ) {}

  // Créer un nouveau formulaire
  async create(createDemandeDto: Demande): Promise<Demande> {
    const createdDemande = new this.demandeModel(createDemandeDto);
    return createdDemande.save();
  }

  // Obtenir tous les formulaires
  async findAll(): Promise<Demande[]> {
    return this.demandeModel.find().exec();
  }

  // Trouver un formulaire par ID
  async findOne(id: string): Promise<Demande> {
    return this.demandeModel.findById(id).exec();
  }

  // Supprimer un formulaire par ID
  async remove(id: string): Promise<any> {
    return this.demandeModel.findByIdAndDelete(id).exec();
  }
}
