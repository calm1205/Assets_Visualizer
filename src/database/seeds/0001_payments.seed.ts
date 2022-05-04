import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { PaymentType } from '~/enums/payment-type.enum';
import { PaymentInput } from '~/interfaces/inputs/payment.input';

import { userId } from '../uuid';

export default class CreatePayment implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const data: PaymentInput[] = [
      {
        userId: userId,
        name: '交通費',
        price: 1000,
        paymentDate: '2020-01-01',
        paymentType: PaymentType.EXPENSES,
        score: null,
      },
      {
        userId: userId,
        name: '飲み会',
        price: 6000,
        paymentDate: '2020-01-01',
        paymentType: PaymentType.WASTE,
        score: 80,
      },
      {
        userId: userId,
        name: '参考書',
        price: 3000,
        paymentDate: '2020-01-01',
        paymentType: PaymentType.INVESTMENT,
        score: null,
      },
    ];

    await connection
      .createQueryBuilder()
      .insert()
      .into('payments')
      .values(data)
      .execute();
  }
}
