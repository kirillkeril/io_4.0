import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DiscussionModule } from './discussion/discussion.module';
import { MailsModule } from './mails/mails.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'epishin.kirill2004@gmail.com',
          pass: 'whsqjppvhpsgkpqy'
        }
      },
      defaults: {
        from: 'epishin.kirill2004@gmail.com',
      },
      template: {
        options: {
          strict: true,
        },
      },
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot('mongodb://bulbaman.me:16017'),
    MessagesModule,
    UsersModule,
    DiscussionModule,
    MailsModule,
  ],
})
export class AppModule { }
