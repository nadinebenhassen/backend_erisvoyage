import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

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
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly image: string;
}
