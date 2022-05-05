import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Payment } from '~/entities/payment.entity';
import { User } from '~/entities/user.entity';
import { PaymentInput } from '~/interfaces/inputs/payment.input';
import { ResultOutput } from '~/interfaces/outputs/result.outputs';

import { Result } from '../result/result';

@Injectable()
export class UpsertPaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async execute(input: PaymentInput, user: User): Promise<ResultOutput> {
    if (!input.paymentId) return await this._create(input, user);
    if (input.paymentId) return await this._update(input, user);
  }

  /**
   * 支払いの新規作成
   */
  private async _create(
    input: PaymentInput,
    createUser: User,
  ): Promise<ResultOutput> {
    const payment = this.paymentRepository.save({
      ...input,
      userId: createUser.id,
    });
    return new Result(payment).result;
  }

  /**
   * 支払いの更新
   */
  private async _update(
    input: PaymentInput,
    updateUser: User,
  ): Promise<ResultOutput> {
    const dbPayment = await this.paymentRepository.findOne(input.paymentId);

    if (dbPayment.userId !== updateUser.id)
      throw new BadRequestException('自身の支払い以外は更新できません。');

    const { paymentId, ...updateObject } = input;
    const update = await this.paymentRepository.update(
      dbPayment.id,
      updateObject,
    );
    return new Result(update).result;
  }
}
