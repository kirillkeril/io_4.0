import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CreateMessageDto } from '../dto/create-message.dto';

@Schema()
export class Message {
  @Prop()
  chatId: string;
  @Prop()
  authorId: string;
  @Prop()
  text: string;

  constructor(dto: CreateMessageDto) {
    this.authorId = dto.authorId;
    this.chatId = dto.chatId;
    this.text = dto.text;
  }
}

export type MessageDocument = HydratedDocument<Message>;

export const MessageSchema = SchemaFactory.createForClass(Message);
