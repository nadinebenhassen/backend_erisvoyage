// src/voyage/dto/create-voyage.dto.ts
import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateVoyageDto {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  destination: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsOptional()
 
  price?: string;

  @IsOptional()
  @IsString()
  program?: string;
}
