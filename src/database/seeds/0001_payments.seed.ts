import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { PaymentType } from '~/enums/payment-type.enum';
import { PaymentInput } from '~/interfaces/inputs/payment.input';

import { userId } from '../uuid';

type Input = PaymentInput & { userId: string };

export default class CreatePayment implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const data: Input[] = [
      {
        userId: userId,
        title: '交通費',
        price: 1000,
        paymentDate: '2020-01-01',
        paymentType: PaymentType.EXPENSES,
        satisfaction: null,
      },
      {
        userId: userId,
        title: '飲み会',
        price: 6000,
        paymentDate: '2020-01-01',
        paymentType: PaymentType.WASTE,
        satisfaction: 80,
      },
      {
        userId: userId,
        title: '参考書',
        price: 3000,
        paymentDate: '2020-01-01',
        paymentType: PaymentType.INVESTMENT,
        satisfaction: null,
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
