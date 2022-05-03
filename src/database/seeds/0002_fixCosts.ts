import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { userId } from '../uuid';
import { PaymentType } from '~/enum/payment-type.enum';
import { PaymentCycle } from '~/enum/payment-cycle.enum';

export default class CreateFixCost implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const data = [
      {
        userId: userId,
        name: '家賃',
        price: '100000',
        paymentCycle: PaymentCycle.MONTHLY,
        paymentType: PaymentType.EXPENSES,
      },
      {
        userId: userId,
        name: 'ジム',
        price: '6000',
        paymentCycle: PaymentCycle.MONTHLY,
        paymentType: PaymentType.EXPENSES,
      },
      {
        userId: userId,
        name: '積立NISA',
        price: '30000',
        paymentCycle: PaymentCycle.MONTHLY,
        paymentType: PaymentType.INVESTMENT,
      },
    ];

    await connection
      .createQueryBuilder()
      .insert()
      .into('fixCosts')
      .values(data)
      .execute();
  }
}
