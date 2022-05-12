import { ParseUUIDPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { PeriodecPaymentEntity } from '~/entities/periodecPayment.entity';
import { FindPeriodecPaymentByIdService } from '~/services/periodecPayment/findPeriodecPaymentById.service';

@Resolver(() => PeriodecPaymentEntity)
export class FindPeriodecPaymentById {
  constructor(private readonly usecase: FindPeriodecPaymentByIdService) {}

  @Query(() => PeriodecPaymentEntity, { description: '定期支払のid検索' })
  async findPeriodecPaymentById(
    @Args('periodecPaymentId', ParseUUIDPipe) periodecPaymentId: string,
  ) {
    return await this.usecase.execute(periodecPaymentId);
  }
}
