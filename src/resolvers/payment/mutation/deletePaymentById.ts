import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { User } from '~/entities/user.entity';
import { DeletePaymentInput } from '~/interfaces/inputs/deletePayment.input';
import { ResultOutput } from '~/interfaces/outputs/result.outputs';
import { CurrentUser } from '~/services/auth/decorator/currentUser.decorator';
import { GqlAuthGuard } from '~/services/auth/guards/gql-auth.guard';
import { DeletePaymentByIdService } from '~/services/payment/deletePaymentById.service';

@Resolver(() => ResultOutput)
export class DeletePaymentById {
  constructor(private readonly usecase: DeletePaymentByIdService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ResultOutput, { description: '支払い削除' })
  async deletePaymentById(
    @Args('input') input: DeletePaymentInput,
    @CurrentUser() user: User,
  ) {
    return await this.usecase.execute(input, user);
  }
}
