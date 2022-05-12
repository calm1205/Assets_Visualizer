import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { User } from '~/entities/user.entity';
import { PeriodecPaymentInput } from '~/interfaces/inputs/periodecPayment.input';
import { ResultOutput } from '~/interfaces/outputs/result.outputs';
import { CurrentUser } from '~/services/auth/decorator/currentUser.decorator';
import { GqlAuthGuard } from '~/services/auth/guards/gql-auth.guard';
import { UpsertPeriodecPaymentService } from '~/services/periodecPayment/upsertPeriodecPaymentById.service';

@Resolver(() => ResultOutput)
export class UpsertPeriodecPaymentById {
  constructor(private readonly usecase: UpsertPeriodecPaymentService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ResultOutput, { description: '定期支払いの登録/更新' })
  async upsertPeriodecPaymentById(
    @Args('input') input: PeriodecPaymentInput,
    @CurrentUser() user: User,
  ) {
    return await this.usecase.execute(input, user.id);
  }
}
