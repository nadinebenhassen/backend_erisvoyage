import { Schema, Document } from 'mongoose';

export const CroisiereSchema = new Schema({
  title: { type: String, required: true },
  ship: { type: String, required: true },
  rating: { type: Number, required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export interface Croisiere extends Document {
  id?: string;
  title: string;
  ship: string;
  rating: number;
  departureDate: Date;
  returnDate: Date;
  price: number;
  image: string;
}
