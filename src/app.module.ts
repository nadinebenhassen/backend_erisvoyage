import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DemandeModule } from './demande/demande.module';
import { HotelModule } from './hotel/hotel.module';
import { CroisiereModule } from './croisiere/croisiere.module';
import { ConfigModule } from '@nestjs/config';
import { CountriesModule } from './countries/countries.module';
@Module({
  imports: [ MongooseModule.forRoot('mongodb://0.0.0.0:27017/erisvoyage'), // Remplace par l'URL de ta base de données MongoDB
  DemandeModule,
   AuthModule,
   HotelModule,
   CroisiereModule,  ConfigModule.forRoot({
    isGlobal: true, // Rendre la configuration disponible globalement
  }), CountriesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
