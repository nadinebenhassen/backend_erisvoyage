import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateDemandeDto {
  @IsString()
  @IsNotEmpty()
  readonly nom: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsString()
  @IsNotEmpty()
  readonly prenom: string;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly tel: string;
  @IsString()
  @IsNotEmpty()
  readonly objet: string;


 
}


