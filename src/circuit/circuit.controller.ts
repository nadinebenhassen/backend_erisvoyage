import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CircuitService } from './circuit.service';
import { CreateCircuitDto } from './create-circuit.dto';

@Controller('circuits')
export class CircuitController {
  constructor(private readonly circuitService: CircuitService) {}

  @Post()
  async create(@Body() createCircuitDto: CreateCircuitDto) {
    return this.circuitService.create(createCircuitDto);
  }

  @Get()
  async findAll() {
    return this.circuitService.findAll();
  }

  @Get(':titre')
  async findOne(@Param('titre') titre: string) {
    return this.circuitService.findOneByTitre(titre);
  }

  @Put(':titre')
  async update(@Param('titre') titre: string, @Body() updateCircuitDto: CreateCircuitDto) {
    return this.circuitService.update(titre, updateCircuitDto);
  }

  @Delete(':titre')
  async remove(@Param('titre') titre: string) {
    return this.circuitService.remove(titre);
  }
}
