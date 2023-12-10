import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { CreateDiscussionDto } from './dto/create-discussion.dto';

@Controller('api/discussion')
export class DiscussionController {
  constructor(private readonly discussionService: DiscussionService) {}

  @Post()
  async create(@Body() createDiscussionDto: CreateDiscussionDto) {
    
    console.log("new disc", createDiscussionDto);
    return await this.discussionService.create(createDiscussionDto);
  }

  @Get()
  async findAll() {
    return await this.discussionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.discussionService.findOne(id);
  }
}
