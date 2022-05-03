import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { userId } from '../uuid';
import { PaymentType } from '~/enums/payment-type.enum';
import { PaymentCycle } from '~/enums/payment-cycle.enum';
import { FixCostInput } from '~/inputs/fixCost.input';

export default class CreateFixCost implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const data: FixCostInput[] = [
      {
        userId: userId,
        name: '家賃',
        price: 100000,
        paymentCycle: PaymentCycle.MONTHLY,
        paymentType: PaymentType.EXPENSES,
      },
      {
        userId: userId,
        name: 'ジム',
        price: 6000,
        paymentCycle: PaymentCycle.MONTHLY,
        paymentType: PaymentType.SELF_INVESTMENT,
      },
      {
        userId: userId,
        name: '積立NISA',
        price: 30000,
        paymentCycle: PaymentCycle.MONTHLY,
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
