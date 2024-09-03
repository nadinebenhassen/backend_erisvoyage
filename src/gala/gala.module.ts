// src/gala/gala.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GalaService } from './gala.service';
import { GalaController } from './gala.controller';
import { Gala, GalaSchema } from './gala.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Gala.name, schema: GalaSchema }])],
  controllers: [GalaController],
  providers: [GalaService],
})
export class GalaModule {}
