import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '~/entities/user.entity';
import UserResolver from '~/resolver/user';
import UserService from '~/service/user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [...UserResolver, ...UserService],
})
export class UsersModule {}
