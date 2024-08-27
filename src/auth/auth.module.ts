import { Module } from '@nestjs/common';
import{ConfigService,ConfigModule} from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import {  UserSchema } from 'src/user/user.schema';
import { UserModule } from '../user/user.module'
import { JwtModule } from '@nestjs/jwt';
import { EmailModule } from '../email/email.module';  
export const jwtConstants = {
  secret: 'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
};
@Module({
  imports: [
    UserModule,PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), EmailModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],

})
export class AuthModule {}
