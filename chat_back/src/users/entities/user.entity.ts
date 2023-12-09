import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
  @Prop()
  fullname: string;
  @Prop()
  companyName: string;
  @Prop()
  requisites: string;
  @Prop()
  bik: string;
  @Prop()
  paymentAccount: string;
  @Prop()
  phone: string;
  @Prop()
  email: string;
  @Prop()
  role: string;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
