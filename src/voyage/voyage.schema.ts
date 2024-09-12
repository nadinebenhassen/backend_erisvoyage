// src/voyage/schemas/voyage.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Voyage extends Document {
  @Prop({ required: true })
  type: string; // Organized or Non-organized

  @Prop({ required: true })
  destination: string;

  @Prop()
  image: string;

  @Prop()
  price: string; // Optional, only if organized

  @Prop()
  program: string; // Program details, optional
}

export const VoyageSchema = SchemaFactory.createForClass(Voyage);
