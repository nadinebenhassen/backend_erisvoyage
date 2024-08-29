



import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DemandeService } from './demande.service';
import { Demande } from './demande.schema';
import { CreateDemandeDto } from './createdemande.dto';


@Controller('demande')
export class DemandeController  {
  constructor(private readonly demandeService: DemandeService) {}

  @Post()
  async create(@Body() createDemandeDto: Demande) {
    return this.demandeService.create(createDemandeDto);
  }

  @Get()
  async findAll(): Promise<Demande[]> {
    return this.demandeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Demande> {
    return this.demandeService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.demandeService.remove(id);
  }
}
