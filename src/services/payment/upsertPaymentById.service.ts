import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Payment } from '~/entities/payment.entity';
import { User } from '~/entities/user.entity';
import { PaymentInput } from '~/interfaces/inputs/payment.input';

@Injectable()
export class UpsertPaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async execute(input: PaymentInput, user: User): Promise<Payment> {
    if (!input.paymentId) return await this.create(input, user);
    if (input.paymentId) return this.update(input, user);
  }

  /**
   * 支払いの新規作成
   */
  private async create(input: PaymentInput, user: User): Promise<Payment> {
    const payment = await this.paymentRepository.save({
      ...input,
      userId: user.id,
    });
    return payment;
  }

  /**
   * 支払いの更新
   */
  private async update(input: PaymentInput, user: User): Promise<Payment> {
    const dbPayment = await this.paymentRepository.findOne(input.paymentId);

    if (this.isOwnPayment(dbPayment, user))
      return await this.paymentRepository.save({
        ...input,
        id: dbPayment.id,
        userId: user.id,
      });

    throw new BadRequestException('自身の支払い以外は更新できません。');
  }

  /**
   * 本人確認
   */
  private isOwnPayment(payment: Payment, user: User) {
    return payment.userId === user.id;
  }
}
