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

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) { }
  clients: Set<Socket> = new Set();

  @SubscribeMessage('createMessage')
  create(
    @MessageBody() createMessageDto: CreateMessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    this.clients.add(client);
    const message = this.messagesService.create(createMessageDto);
    this.clients.forEach((c) => {
      c.emit('message', message);
    });
  }

  @SubscribeMessage('findAllMessages')
  findAll(@ConnectedSocket() client: Socket) {
    this.clients.add(client);
    const messages = this.messagesService.findAll();
    this.clients.forEach((c) => {
      c.emit('message', messages);
    });
  }
}
