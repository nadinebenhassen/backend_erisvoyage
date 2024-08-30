import { Module } from '@nestjs/common';
import { OmraService } from './omra.service';
import { OmraController } from './omra.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Omra, OmraSchema } from './omra.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Omra.name, schema: OmraSchema }])],
  providers: [OmraService],
  controllers: [OmraController]
})
export class OmraModule {}
