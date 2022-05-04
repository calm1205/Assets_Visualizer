import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '~/entities/user.entity';
import { UserInput } from '~/inputs/user.input';

@Injectable()
export class SignUpService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(userInput: UserInput): Promise<User> {
    const user = await this.userRepository.save(userInput);
    return user;
  }
}
