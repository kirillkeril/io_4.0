import { Module } from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { DiscussionController } from './discussion.controller';
import { Discussion, DiscussionSchema } from './entities/discussion.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Discussion.name, schema: DiscussionSchema },
    ]),
  ],
  controllers: [DiscussionController],
  providers: [DiscussionService],
})
export class DiscussionModule {}
