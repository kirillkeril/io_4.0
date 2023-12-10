import { Controller, Get, Post } from '@nestjs/common';
import { MailsService } from './mails.service';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';


@Controller('/api/mail')
export class MailsController {
  constructor(private readonly mailService: MailsService) {}
  
  @Post()
  sendMessage(@Body() data) {
    return this.mailService.sendMail(data.email, data.message); 
  }
}
