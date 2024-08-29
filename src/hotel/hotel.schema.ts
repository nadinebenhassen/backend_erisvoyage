import { Schema, Document } from 'mongoose';

export const HotelSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

export interface Hotel extends Document {
  id?: string;
  title: string;
  location: string;
  price: string;
  description: string;
  image: string;
}
