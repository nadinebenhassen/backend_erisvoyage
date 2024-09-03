// src/voyage/voyage.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VoyageService } from './voyage.service';
import { CreateVoyageDto } from './create-voyage.dto';

@Controller('voyages')
export class VoyageController {
  constructor(private readonly voyageService: VoyageService) {}

  @Post()
  async create(@Body() createVoyageDto: CreateVoyageDto) {
    return this.voyageService.create(createVoyageDto);
  }

  @Get()
  async findAll() {
    return this.voyageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.voyageService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateVoyageDto: CreateVoyageDto) {
    return this.voyageService.update(id, updateVoyageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.voyageService.remove(id);
  }
}
