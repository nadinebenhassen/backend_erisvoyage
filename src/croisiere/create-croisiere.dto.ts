import { IsString, IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class CreateCroisiereDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly ship: string;

  @IsNumber()
  @IsNotEmpty()
  readonly rating: number;

  @IsDate()
  @IsNotEmpty()
  readonly departureDate: Date;

  @IsDate()
  @IsNotEmpty()
  readonly returnDate: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly image: string;
}
