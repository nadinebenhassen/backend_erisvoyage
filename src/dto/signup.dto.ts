import { IsString, IsEmail, MinLength, IsEnum, IsNotEmpty } from 'class-validator';
export enum Role{
  Admin = 'admin',
  User = 'assistant'
}

export class SignupDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
    @IsString()
    readonly role: Role;
 
}
