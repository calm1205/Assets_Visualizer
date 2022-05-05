import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { PaymentPeriod } from '~/enums/payment-cycle.enum';
import { PaymentType } from '~/enums/payment-type.enum';
import { PeriodecPaymentInput } from '~/interfaces/inputs/periodecPayment.input';

import { userId } from '../uuid';

export default class CreatePeriodecPayment implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const data: PeriodecPaymentInput[] = [
      {
        userId: userId,
        name: '家賃',
        price: 100000,
        paymentPeriod: PaymentPeriod.MONTHLY,
        paymentType: PaymentType.EXPENSES,
      },
      {
        userId: userId,
        name: 'ジム',
        price: 6000,
        paymentPeriod: PaymentPeriod.MONTHLY,
        paymentType: PaymentType.SELF_INVESTMENT,
      },
      {
        userId: userId,
        name: '積立NISA',
        price: 30000,
        paymentPeriod: PaymentPeriod.MONTHLY,
        paymentType: PaymentType.INVESTMENT,
        annualInterest: 0.05,
      },
    ];

    await connection
      .createQueryBuilder()
      .insert()
      .into('fix_costs')
      .values(data)
      .execute();
  }
}
