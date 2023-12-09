import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messagesRepo: Model<Message>,
  ) { }

  async create(createMessageDto: CreateMessageDto) {
    const newMessage = await this.messagesRepo.create({ ...createMessageDto });
    await newMessage.save();
    return newMessage;
  }

  async findAll() {
    return await this.messagesRepo.find();
  }
}
