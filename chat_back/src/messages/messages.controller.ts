import { Controller, Post } from '@nestjs/common';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import FileInterceptor from "@nestjs/platform-express";

@Controller('/api/file')
export class MessagesController {
  constructor() { }
  
  
  // @Post()
  // @UseInterceptors(@FileInterceptor('file') file)
  // async upload( @UploadedFile() file) {
  //   console.log(file)
  // }
}