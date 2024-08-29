import { Module } from '@nestjs/common';
import { CroisiereService } from './croisiere.service';
import { CroisiereController } from './croisiere.controller';
import { CroisiereSchema } from './croisiere.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Croisiere', schema: CroisiereSchema }]),
  ],
  providers: [CroisiereService],
  controllers: [CroisiereController]
})
export class CroisiereModule {}
