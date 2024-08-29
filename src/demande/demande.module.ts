import { Module } from '@nestjs/common';
import { DemandeController } from './demande.controller';
import { DemandeService } from './demande.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Demande, DemandeSchema } from './demande.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Demande.name, schema: DemandeSchema }]),
  ],
  controllers: [DemandeController],
  providers: [DemandeService]
})
export class DemandeModule {}



