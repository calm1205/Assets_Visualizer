import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth.module';
import { GQLModule } from './graphql.module';
import { PaymentModule } from './payment.module';
import { PeriodecPaymentModule } from './periodecPayment.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    GQLModule,
    UserModule,
    AuthModule,
    PaymentModule,
    PeriodecPaymentModule,
  ],
})
export class AppModule {}
