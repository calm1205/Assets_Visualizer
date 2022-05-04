import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { User } from '~/entities/user.entity';
import { SignUpInput } from '~/interfaces/inputs/signup.input';

@Injectable()
export class SignUpService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(input: SignUpInput): Promise<User> {
    const salt = await bcrypt.genSalt(); // hash値生成の際にsaltを渡すことでhash値復元を困難にできる。
    const hashPassword = await bcrypt.hash(input.password, salt);

    const user = await this.userRepository.save({
      ...input,
      password: hashPassword,
    });
    return user;
  }
}
