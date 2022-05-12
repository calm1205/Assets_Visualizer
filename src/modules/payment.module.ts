import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentEntity } from '~/entities/payment.entity';
import PaymentResolvers from '~/resolvers/payment';
import PaymentServices from '~/services/payment';

import { AuthModule } from './auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentEntity]), AuthModule],
  providers: [...PaymentResolvers, ...PaymentServices],
})
export class PaymentModule {}
