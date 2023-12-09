import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DiscussionModule } from './discussion/discussion.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot('mongodb://bulbaman.me:16017'),
    MessagesModule,
    UsersModule,
    DiscussionModule,
  ],
})
export class AppModule {}
