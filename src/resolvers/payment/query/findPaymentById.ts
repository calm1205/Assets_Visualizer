import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { PaymentEntity } from '~/entities/payment.entity';
import { GqlAuthGuard } from '~/services/auth/guards/gql-auth.guard';
import { FindPaymentByIdService } from '~/services/payment/findPaymentById.service';

@Resolver(() => PaymentEntity)
export class FindPaymentById {
  constructor(private readonly usecase: FindPaymentByIdService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => PaymentEntity, { description: '支払いのid検索' })
  async findPaymentById(@Args('paymentId', ParseUUIDPipe) paymentId: string) {
    return await this.usecase.execute(paymentId);
  }
}
