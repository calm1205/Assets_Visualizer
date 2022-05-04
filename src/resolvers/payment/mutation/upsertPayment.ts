import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { Payment } from '~/entities/payment.entity';
import { User } from '~/entities/user.entity';
import { PaymentInput } from '~/interfaces/inputs/payment.input';
import { CurrentUser } from '~/services/auth/decorator/currentUser.decorator';
import { GqlAuthGuard } from '~/services/auth/guards/gql-auth.guard';
import { UpsertPaymentService } from '~/services/payment/upsertPaymentById.service';

@Resolver(() => Payment)
export class UpsertPayment {
  constructor(private readonly usecase: UpsertPaymentService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Payment, { description: '支払い登録/更新' })
  async upsertPayment(
    @Args('input') input: PaymentInput,
    @CurrentUser() user: User,
  ) {
    return await this.usecase.execute(input, user);
  }
}
