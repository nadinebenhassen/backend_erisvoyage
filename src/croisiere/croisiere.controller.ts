import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { CroisiereService } from './croisiere.service';
import { CreateCroisiereDto } from './create-croisiere.dto';

@Controller('croisieres')
export class CroisiereController {
  constructor(private readonly croisiereService: CroisiereService) {}

  @Post()
  async create(@Body() createCroisiereDto: CreateCroisiereDto) {
    return this.croisiereService.create(createCroisiereDto);
  }

  @Get()
  async findAll() {
    return this.croisiereService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.croisiereService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCroisiereDto: CreateCroisiereDto) {
    return this.croisiereService.update(id, updateCroisiereDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.croisiereService.remove(id);
  }
}
