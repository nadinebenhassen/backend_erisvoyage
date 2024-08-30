import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { OmraModule } from './omra/omra.module';
import { JwtStrategy } from './auth/jwt.strategy';
@Module({
  imports: [UserModule,MongooseModule.forRoot('mongodb://0.0.0.0:27017/erisvoyage'), AuthModule, OmraModule,],
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})
export class AppModule {}
