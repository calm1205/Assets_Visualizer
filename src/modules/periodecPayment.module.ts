import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PeriodecPaymentEntity } from '~/entities/periodecPayment.entity';
import PeriodecPaymentResolvers from '~/resolvers/periodecPayment';
import PeriodecPaymentServices from '~/services/periodecPayment';

@Module({
  imports: [TypeOrmModule.forFeature([PeriodecPaymentEntity])],
  providers: [...PeriodecPaymentResolvers, ...PeriodecPaymentServices],
})
export class PeriodecPaymentModule {}
