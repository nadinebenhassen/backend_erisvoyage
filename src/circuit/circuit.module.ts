import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CircuitService } from './circuit.service';
import { CircuitController } from './circuit.controller';
import { CircuitSchema } from './circuit.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Circuit', schema: CircuitSchema }])],
  controllers: [CircuitController],
  providers: [CircuitService],
})
export class CircuitModule {}
