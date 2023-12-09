import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Discussion {
  @Prop()
  privaderId: string;
  @Prop()
  customerId: string;
  @Prop()
  status: string;
  @Prop()
  type: string;
  @Prop()
  contractNumber: string;
  @Prop()
  startDate: string;
}

export type DiscussionDocument = HydratedDocument<Discussion>;

export const DiscussionSchema = SchemaFactory.createForClass(Discussion);
