// src/countries/countries.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from './countries.schema';
import { CreateCountryDto } from './create-country.dto';

@Injectable()
export class CountriesService {
  
  
  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
  ) {}

  async create(createCountryDto: { name: string; image: string }): Promise<Country> {
    const newCountry = new this.countryModel(createCountryDto);
    return newCountry.save();
  }

  async findAll(): Promise<Country[]> {
    return this.countryModel.find().exec();
  }
  async findOne(id: string): Promise<Country> {
    const country = await this.countryModel.findById(id).exec();
   
    return country;
  }
  async update(id: string, updateCountryDto: CreateCountryDto): Promise<Country> {
    const updatedCountry = await this.countryModel.findByIdAndUpdate(id, updateCountryDto, {
      new: true, // Retourne le document mis à jour
    }).exec();
    return updatedCountry;
  }
  async remove(id: string): Promise<Country> {
    const country = await this.countryModel.findByIdAndDelete(id).exec();
    return country;
  }
  
}
