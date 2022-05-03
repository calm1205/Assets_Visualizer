import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { userId } from '../uuid';
import { PaymentType } from '~/enum/payment-type.enum';
import { PaymentInput } from '~/input/payment.input';

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
