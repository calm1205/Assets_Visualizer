import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '~/entities/user.entity';
import UserResolver from '~/resolvers/user';
import UserService from '~/services/user';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: 36000,
      },
    }),
  ],
  providers: [...UserResolver, ...UserService],
})
export class UserModule {}
