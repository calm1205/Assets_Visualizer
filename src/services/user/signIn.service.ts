import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { User } from '~/entities/user.entity';
import { SignInInput } from '~/interfaces/inputs/signIn.input';
import { Token } from '~/interfaces/outputs/token.outputs';

@Injectable()
export class SignInService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async execute(input: SignInInput): Promise<Token> {
    const { email, password } = input;
    const user = await this.userRepository.findOne({ email });

    if (await this.isValid(user, password)) {
      return await this.createToken(user);
    }

    throw new UnauthorizedException(
      'メールアドレスまたはパスワードが異ります。',
    );
  }

  /**
   * passwordの認証
   */
  private async isValid(dbUser: User, password: string): Promise<boolean> {
    if (!dbUser) return false;
    const valid = await bcrypt.compare(password, dbUser.password);
    return valid;
  }

  /**
   * JWTの生成
   */
  private async createToken(user: User): Promise<Token> {
    const payload = { id: user.id, email: user.email };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  }
}
