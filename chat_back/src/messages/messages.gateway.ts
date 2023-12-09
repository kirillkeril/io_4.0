/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Socket } from 'node:net';
import { json } from 'stream/consumers';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) { }
  clients: Set<Socket> = new Set();

  @SubscribeMessage('newMessage')
  async create(@MessageBody() dto, @ConnectedSocket() client: Socket) {
    this.clients.add(client);
    const createMessageDto: CreateMessageDto = JSON.parse(
      dto,
    ) as CreateMessageDto;
    const message = await this.messagesService.create(createMessageDto);
    console.log('create', message, createMessageDto);
    this.clients.forEach((c) => {
      c.emit('newMessageCreated', JSON.stringify(message));
    });
  }

  @SubscribeMessage('findAllMessages')
  async findAll(@ConnectedSocket() client: Socket) {
    this.clients.add(client);
    const messages = await this.messagesService.findAll();
    console.log('find all', messages);
    messages.forEach((m) => {
      client.emit('allMessagesFinded', JSON.stringify(m));
    });
  }
}
