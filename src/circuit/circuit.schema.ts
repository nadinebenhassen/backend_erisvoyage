// src/circuits/schemas/circuit.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Circuit extends Document {
  @Prop({ required: true })
  titre: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  season: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: [String] })
  images: string[];
}

export const CircuitSchema = SchemaFactory.createForClass(Circuit);
