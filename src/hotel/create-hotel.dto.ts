import { IsString, IsNotEmpty, IsNumber, IsArray, IsOptional } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly location: string;


  @IsNotEmpty()
  readonly price: string;

 
  @IsString()
  @IsNotEmpty()
  readonly image: string;

  @IsString()
  @IsNotEmpty()
  readonly link: string;

  @IsString()
  @IsNotEmpty()
  readonly category: 'national' | 'international';

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  readonly images?: string[];

  @IsString()
  @IsOptional()
  readonly accommodation?: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  readonly services?: string[];
}
