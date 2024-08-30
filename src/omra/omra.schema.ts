import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type OmraDocument = Omra & Document;

@Schema()
export class Omra {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: string;
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  image: string; // URL de l'image
}

export const OmraSchema = SchemaFactory.createForClass(Omra);
