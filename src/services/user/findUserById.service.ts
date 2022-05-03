import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '~/entities/user.entity';

@Injectable()
export class FindUserByIdService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(userId: string): Promise<User> {
    const user = await this.userRepository.findOne(userId);
    if (!user) throw new NotFoundException();
    return user;
  }
}
