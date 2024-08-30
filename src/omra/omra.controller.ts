import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { OmraService } from './omra.service';
import { CreateOmraDto } from './create_omra.dto';
import { UpdateOmraDto } from './update_omra.dto';

@Controller('omra')
export class OmraController {
  constructor(private readonly omraService: OmraService) {}

  @Post()
  async create(@Body() createOmraDto: CreateOmraDto) {
    return this.omraService.create(createOmraDto);
  }

  @Get()
  async findAll() {
    return this.omraService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.omraService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateOmraDto: UpdateOmraDto) {
    return this.omraService.update(id, updateOmraDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.omraService.delete(id);
  }
}
