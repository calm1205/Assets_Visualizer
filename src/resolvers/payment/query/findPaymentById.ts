import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { Payment } from '~/entities/payment.entity';
import { GqlAuthGuard } from '~/services/auth/guards/gql-auth.guard';
import { FindPaymentByIdService } from '~/services/payment/findPaymentById.service';

@Resolver(() => Payment)
export class FindPaymentById {
  constructor(private readonly usecase: FindPaymentByIdService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => Payment, { description: '支払いのid検索' })
  async findPaymentById(@Args('paymentId', ParseUUIDPipe) paymentId: string) {
    return await this.usecase.execute(paymentId);
  }
}
