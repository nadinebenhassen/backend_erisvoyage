import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; 

export enum Role{
 admin='admin',
 user='user'

}

@Schema()
export class User extends Document {
  @Prop({ default: () => uuidv4(), unique: true })
  id: string;  // Champ ID distinc
  @Prop({ required: true})
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
@Prop({required:true})
role:Role;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now })
  updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
