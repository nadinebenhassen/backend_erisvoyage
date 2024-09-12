import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SignupDto } from '../dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/user.schema';

import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async signup(signupDto: SignupDto) {
    const { username, email, password,role} = signupDto;

    // Hashage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const newUser = await this.userService.createUser({
      username,
      email,
      password: hashedPassword,
      role
    
    });

    // Génération du token JWT après inscription
    const payload = { username: newUser.username, sub: newUser._id ,role:newUser.role};
    return {
      user: newUser,
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new Error('ce utilisateur nexiste pas  ');  // Tu peux remplacer par une exception NestJS appropriée
    }

    const payload = { username: user.username, sub: user._id,role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
       user,

    };
  }
  async load(userId: string): Promise<User> {

     const user = await this.userService.findUserById(userId)
     return user
  }
  

  

  async findUserByEmail(email: string) {
    return this.userService.findByEmail(email);
  }







}
