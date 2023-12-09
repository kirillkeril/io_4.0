import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CreateMessageDto } from '../dto/create-message.dto';

@Schema()
export class Message {
  @Prop()
  messageId: string;
  @Prop()
  text: string;
  @Prop()
  authorId: string;
  @Prop()
  authorName: string;

  constructor(dto: CreateMessageDto) {
    this.text = dto.text;
  }
}

export type MessageDocument = HydratedDocument<Message>;

export const MessageSchema = SchemaFactory.createForClass(Message);
