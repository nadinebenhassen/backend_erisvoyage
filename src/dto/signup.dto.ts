import { IsString, IsEmail, MinLength, IsEnum } from 'class-validator';


export class SignupDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

 
}
