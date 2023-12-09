import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
@Controller('files')
export class FilesController {
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  sendFile(@UploadedFile() file) {
    console.log(file);
  }
}
