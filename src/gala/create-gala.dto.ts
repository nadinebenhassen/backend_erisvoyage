// src/gala/dto/create-gala.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateGalaDto {
  @IsNotEmpty()
  @IsString()
  titre: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  hotel: string;

  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @IsNotEmpty()
  
  departureDate: string;

  @IsNotEmpty()
  
  returnDate: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string;
}
