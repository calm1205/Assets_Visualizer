import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
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
    const salt = await bcrypt.genSalt(); // hash値生成の際にsaltを渡すことでhash値復元を困難にできる。
    const hashPassword = await bcrypt.hash(userInput.password, salt);

    const user = await this.userRepository.save({
      ...userInput,
      password: hashPassword,
    });
    return user;
  }
}
