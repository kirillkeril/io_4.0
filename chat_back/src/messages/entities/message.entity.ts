import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CreateMessageDto } from '../dto/create-message.dto';

@Schema()
export class Message {
  @Prop()
  chat_id: string;
  @Prop()
  author_id: string;
  @Prop()
  text: string;

  constructor(dto: CreateMessageDto) {
    this.author_id = dto.author_id;
    this.chat_id = dto.chat_id;
    this.text = dto.text;
  }
}

export type MessageDocument = HydratedDocument<Message>;

export const MessageSchema = SchemaFactory.createForClass(Message);
