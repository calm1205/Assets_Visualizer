import { ParseUUIDPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from '~/entities/user.entity';
import { FindUserByIdService } from '~/service/user/findUserById.service';

@Resolver(() => User)
export class FindUserById {
  constructor(private readonly usecase: FindUserByIdService) {}

  @Query(() => User, { description: 'ユーザのid検索' })
  async findUserById(@Args('userId', ParseUUIDPipe) userId: string) {
    return await this.usecase.execute(userId);
  }
}
