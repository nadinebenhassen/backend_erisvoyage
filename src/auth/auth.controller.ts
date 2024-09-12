import { Controller, Post, Body,HttpCode, HttpStatus, Get, Query, UnauthorizedException,Header, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from 'src/dto/signup.dto';
import { LoginDto } from 'src/dto/login.dto';
import { EmailService } from '../email/email.service';
import { JwtAuthGuard } from './jwt.guard';
import { RoleGuard } from './role/Role.guard';
import { Roles } from './roles/role.decorator';

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
  @UseGuards(JwtAuthGuard)
  @Get('load')
  async loadUser(@Req() req) {
    const userId = req.user.id
    const user = await this.authService.load(userId);
    return user;
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Req() req, @Res() res) {
    return res.status(HttpStatus.OK).json(req.user);
  }
}


