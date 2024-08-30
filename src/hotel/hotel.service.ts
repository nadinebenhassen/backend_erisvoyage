import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './hotel.schema';
import { CreateHotelDto } from './create-hotel.dto';

@Injectable()
export class HotelService {
 
  constructor(@InjectModel('Hotel') private readonly hotelModel: Model<Hotel>) {}

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const createdHotel = new this.hotelModel(createHotelDto);
    return createdHotel.save();
  }

  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().exec();
  }

  async findOne(id: string): Promise<Hotel> {
    const hotel = await this.hotelModel.findById(id).exec();
    if (!hotel) {
      throw new NotFoundException(`Hotel with ID ${id} not found`);
    }
    return hotel;
  }

  async update(id: string, updateHotelDto: CreateHotelDto): Promise<Hotel> {
    const hotel = await this.hotelModel.findByIdAndUpdate(id, updateHotelDto, { new: true }).exec();
    if (!hotel) {
      throw new NotFoundException(`Hotel with ID ${id} not found`);
    }
    return hotel;
  }


  async findByName(title: string): Promise<Hotel> {
    const hotel = await this.hotelModel.findOne({ title: title }).exec();
    if (!hotel) {
      throw new NotFoundException(`Hotel with name "${title}" not found`);
    }
    return hotel;

  }
  async findByNameAndDelete(name: string): Promise<Hotel> {
    const hotel = await this.hotelModel.findOneAndDelete({ title: name }).exec();
    if (!hotel) {
      throw new NotFoundException(`Hotel with name "${name}" not found`);
    }
    return hotel;
  }
  async remove(title: string): Promise<Hotel> {
    const result = await this.hotelModel.findOneAndDelete({ title:title}).exec();
  
    return result;
  }


}

