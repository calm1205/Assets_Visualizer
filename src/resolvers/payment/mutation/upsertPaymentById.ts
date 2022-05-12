import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { User } from '~/entities/user.entity';
import { PaymentInput } from '~/interfaces/inputs/payment.input';
import { ResultOutput } from '~/interfaces/outputs/result.outputs';
import { CurrentUser } from '~/services/auth/decorator/currentUser.decorator';
import { GqlAuthGuard } from '~/services/auth/guards/gql-auth.guard';
import { UpsertPaymentService } from '~/services/payment/upsertPaymentById.service';

@Resolver(() => ResultOutput)
export class UpsertPaymentById {
  constructor(private readonly usecase: UpsertPaymentService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ResultOutput, { description: '支払い登録/更新' })
  async upsertPaymentById(
    @Args('input') input: PaymentInput,
    @CurrentUser() user: User,
  ) {
    return await this.usecase.execute(input, user.id);
  }
}
