// src/hotel/schemas/hotel.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Hotel extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
