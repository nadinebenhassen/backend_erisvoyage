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

  async remove(id: string): Promise<any> {
    const result = await this.hotelModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Hotel with ID ${id} not found`);
    }
    return result;
  }
}
