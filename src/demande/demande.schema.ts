import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DemandeDocument = Demande & Document;

@Schema()
export class Demande {
  @Prop({ required: true })
  nom: string;

  @Prop({ required: true })
  prenom: string;

  @Prop({ required: true })
  tel: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  objet: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: Date.now }) // Use @Prop with default for Date
  createdAt: Date;
}

export const DemandeSchema = SchemaFactory.createForClass(Demande);
