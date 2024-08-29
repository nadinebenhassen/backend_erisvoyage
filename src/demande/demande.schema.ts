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
}

export const DemandeSchema = SchemaFactory.createForClass(Demande);

  