import { Controller, Get, Post, Delete,Body, Param, Put } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Country } from './countries.schema';
import { CreateCountryDto } from './create-country.dto';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  async create(@Body() createCountryDto: { name: string; image: string }): Promise<Country> {
    return this.countriesService.create(createCountryDto);
  }

 
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.countriesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCountryDto: CreateCountryDto) {
    return this.countriesService.update(id, updateCountryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.countriesService.remove(id);
  }

  @Get()
  async findAll(): Promise<Country[]> {
    return this.countriesService.findAll();
    
  }
}
