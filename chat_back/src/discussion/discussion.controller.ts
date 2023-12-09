import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { CreateDiscussionDto } from './dto/create-discussion.dto';

@Controller('api/discussion')
export class DiscussionController {
  constructor(private readonly discussionService: DiscussionService) {}

  @Post()
  create(@Body() createDiscussionDto: CreateDiscussionDto) {
    return this.discussionService.create(createDiscussionDto);
  }

  @Get()
  findAll() {
    return this.discussionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discussionService.findOne(id);
  }
}
