import { IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  resetCode: string;

  @IsString()
  @MinLength(6)
  newPassword: string;
}
