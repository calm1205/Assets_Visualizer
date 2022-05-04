import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { SignInInput } from '~/interfaces/inputs/signIn.input';
import { Token } from '~/interfaces/outputs/token.outputs';
import { SignInService } from '~/services/user/signIn.service';

@Resolver(() => Token)
export class SignIn {
  constructor(private readonly usecase: SignInService) {}

  @Mutation(() => Token, { description: 'ログイン' })
  async signIn(@Args('input') input: SignInInput) {
    return await this.usecase.execute(input);
  }
}
