// src/gala/schemas/gala.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Gala extends Document {
  @Prop({ required: true })
  titre: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  hotel: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  departureDate: string;

  @Prop({ required: true })
  returnDate: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  description: string;
}

export const GalaSchema = SchemaFactory.createForClass(Gala);
