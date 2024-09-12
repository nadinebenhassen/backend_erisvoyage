import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HotelDocument = HydratedDocument<Hotel>;

@Schema()
export class Hotel {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true, enum: ['national', 'international'] })
  category: 'national' | 'international';

  @Prop({ type: [String], default: [] })
  images?: string[];

  @Prop({ default: '' })
  accommodation?: string;

  @Prop({ type: [String], default: [] })
  services?: string[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
