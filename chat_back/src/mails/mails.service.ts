import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailsService {
  constructor(private readonly mailerService: MailerService) { }

  public sendMail(email: string, message: string): void {
    this.mailerService
      .sendMail({
        to: email, // list of receivers
        from: 'noreply', // sender address
        subject: 'Уведомление от Портала поставщиков', // Subject line
        text: message, // plaintext body
      })
      .then(() => {})
      .catch(() => {});
  }
}
