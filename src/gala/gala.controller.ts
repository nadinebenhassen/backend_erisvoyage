// src/gala/gala.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GalaService } from './gala.service';
import { CreateGalaDto } from './create-gala.dto';

@Controller('gala')
export class GalaController {
  constructor(private readonly galaService: GalaService) {}

  @Post()
  async create(@Body() createGalaDto: CreateGalaDto) {
    return this.galaService.create(createGalaDto);
  }

  @Get()
  async findAll() {
    return this.galaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.galaService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGalaDto: CreateGalaDto) {
    return this.galaService.update(id, updateGalaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.galaService.remove(id);
  }
}
