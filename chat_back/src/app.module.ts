import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://bulbaman.me:16017'),
    MessagesModule,
  ],
})
export class AppModule {}
