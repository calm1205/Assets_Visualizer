import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { User } from '~/entities/user.entity';
import { UserInput } from '~/inputs/user.input';
import { SignUpService } from '~/services/user/signUp.service';

@Resolver(() => User)
export class SignUp {
  constructor(private readonly usecase: SignUpService) {}

  @Mutation(() => User, { description: 'ユーザの登録' })
  async signUp(@Args('userInput') userInput: UserInput) {
    return await this.usecase.execute(userInput);
  }
}
