import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CircuitService } from './circuit.service';
import { CreateCircuitDto } from './create-circuit.dto';

@Controller('circuits')
export class CircuitController {
  constructor(private readonly circuitService: CircuitService) {}

  // Create a new circuit
  @Post()
  async create(@Body() createCircuitDto: CreateCircuitDto) {
    return this.circuitService.create(createCircuitDto);
  }

  // Get all circuits
  @Get()
  async findAll() {
    return this.circuitService.findAll();
  }

  // Get a single circuit by its ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.circuitService.findOneById(id);
  }

  // Update a circuit by its ID
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCircuitDto: CreateCircuitDto) {
    return this.circuitService.update(id, updateCircuitDto);
  }

  // Delete a circuit by its ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.circuitService.remove(id);
  }
}
