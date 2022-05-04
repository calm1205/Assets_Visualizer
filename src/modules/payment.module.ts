import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Payment } from '~/entities/payment.entity';
import PaymentResolvers from '~/resolvers/payment';
import PaymentServices from '~/services/payment';

import { AuthModule } from './auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Payment]), AuthModule],
  providers: [...PaymentResolvers, ...PaymentServices],
})
export class PaymentModule {}
