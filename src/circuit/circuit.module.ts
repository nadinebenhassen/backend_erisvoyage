import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CircuitService } from './circuit.service';
import { CircuitController } from './circuit.controller';
import { Circuit, CircuitSchema } from './circuit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Circuit.name, schema: CircuitSchema }]),
  ],
  controllers: [CircuitController],
  providers: [CircuitService],
})
export class CircuitModule {}
