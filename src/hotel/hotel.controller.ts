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
  @Get(':id')
  async findbytitle(@Param('id') id: string) {
    return this.hotelService.findOne(id);
  }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateHotelDto: CreateHotelDto) {
  //   return this.hotelService.update(id, updateHotelDto);
  // }
  @Put('title/:title')
  async update(@Param('title') title: string, @Body() updateHotelDto: CreateHotelDto) {
    return this.hotelService.update(title, updateHotelDto);
  }
  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.hotelService.remove(id);
  // }
  @Delete('title/:title')
  async remove(@Param('title') tilte: string) {
    return this.hotelService.remove(tilte);
  }
  @Get('title/:title')
  async getHotelByName(@Param('title') title: string): Promise<Hotel> {
    const hotel = await this.hotelService.findByName(title);
  
    return hotel;
  }
}
