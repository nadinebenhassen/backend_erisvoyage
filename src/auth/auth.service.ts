import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SignupDto } from '../dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto) {
    const { username, email, password} = signupDto;

    // Hashage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const newUser = await this.userService.createUser({
      username,
      email,
      password: hashedPassword,
    
    });

    // Génération du token JWT après inscription
    const payload = { username: newUser.username, sub: newUser._id };
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

    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
       user,

    };
  }

  generateResetCode(): string {
    return uuidv4(); // Générer un code unique
  }

  async saveResetCode(userId: string, resetCode: string) {
    // Ici, tu peux soit enregistrer le code dans la base de données, soit utiliser un autre moyen de stockage
    await this.userService.updateUser(userId, { resetCode });
  }
  async findUserByResetCode(resetCode: string) {
    return this.userService.findByResetCode(resetCode);
  }

  async updatePassword(userId: string, newPassword: string) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.userService.updateUser(userId, { password: hashedPassword });
  }


  async findUserByEmail(email: string) {
    return this.userService.findByEmail(email);
  }







}
