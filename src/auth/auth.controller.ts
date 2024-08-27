import { Controller, Post, Body,HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from 'src/dto/signup.dto';
import { LoginDto } from 'src/dto/login.dto';
import { ForgetPasswordDto } from 'src/dto/forgetpassword.dto';
import{ResetPasswordDto} from'src/dto/reset-password.dto'
import { EmailService } from '../email/email.service';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly emailService: EmailService,
  ) {}
  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { email, password } = loginDto;
    return this.authService.login(email, password);
  }

  @Post('forget-password')
  async forgetPassword(@Body() forgetPasswordDto: ForgetPasswordDto) {
    const { email } = forgetPasswordDto;
    const user = await this.authService.findUserByEmail(email);

    if (!user) {
      return { message: 'User not found' };
    }

    const resetCode = this.authService.generateResetCode(); // Générer un code
    await this.authService.saveResetCode(user.id, resetCode); // Sauvegarder le code dans la base de données

    // Envoyer le code par email
    await this.emailService.sendResetPasswordEmail(email, resetCode);

    return { message: 'Reset code sent to your email' };
  }


  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    const { resetCode, newPassword } = resetPasswordDto;
    const user = await this.authService.findUserByResetCode(resetCode);

    if (!user) {
      return { message: 'Invalid reset code' };
    }

    // Réinitialiser le mot de passe
    await this.authService.updatePassword(user.id, newPassword);

    return { message: 'Password successfully reset' };
  }



}
