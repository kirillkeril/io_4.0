import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userRepository: Model<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create({ ...createUserDto });
    await user.save();
    return user;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findById(id);
  }
}
