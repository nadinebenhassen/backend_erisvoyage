// src/voyage/voyage.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VoyageService } from './voyage.service';
import { VoyageController } from './voyage.controller';
import { Voyage, VoyageSchema } from './voyage.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Voyage.name, schema: VoyageSchema }])],
  controllers: [VoyageController],
  providers: [VoyageService],
})
export class VoyageModule {}
