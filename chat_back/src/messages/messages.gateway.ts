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
  constructor(private readonly messagesService: MessagesService) {}
  clients: Set<Socket> = new Set();

  @SubscribeMessage('newMessage')
  async create(@MessageBody() inputMsg, @ConnectedSocket() client: Socket) {
    console.log('msg', inputMsg);

    const createMessageDto: CreateMessageDto = JSON.parse(
      inputMsg,
    ) as CreateMessageDto;
    const message = await this.messagesService.create(createMessageDto);
    // const ids = createMessageDto.messageId.split(':');
    this.clients.forEach((c) => {
      c.emit('newMessageCreated', JSON.stringify(message));
    });
  }

  @SubscribeMessage('findAllMessages')
  async findAll(@ConnectedSocket() client: Socket, @MessageBody() msg) {
    console.log('a', msg);

    this.clients.add(client);
    const messages = await this.messagesService.findAll();
    // const filteredMessages = messages.filter((m) => {
    //   return m.messageId == `${msg.customerId}:${msg.providerId}`;
    // });
    // console.log(filteredMessages.length);
    messages.forEach((m) => {
      client.emit('allMessagesFinded', JSON.stringify(m));
    });
  }
}
