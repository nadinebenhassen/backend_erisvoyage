import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './create-hotel.dto';
import { Hotel } from './hotel.schema';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  async create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.create(createHotelDto);
  }

  @Get()
  async findAll() {
    return this.hotelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.hotelService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHotelDto: CreateHotelDto) {
    return this.hotelService.update(id, updateHotelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.hotelService.remove(id);
  }

  @Get('id')
  async getHotelByName(@Param('id') id: string): Promise<Hotel> {
    return this.hotelService.findOne(id);
  }
}
