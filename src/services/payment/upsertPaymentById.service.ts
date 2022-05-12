import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PaymentEntity } from '~/entities/payment.entity';
import { PaymentInput } from '~/interfaces/inputs/payment.input';
import { ResultOutput } from '~/interfaces/outputs/result.outputs';

import { Payment } from '../domain/payment/payment';
import { Result } from '../result/result';

@Injectable()
export class UpsertPaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>,
  ) {}

  async execute(input: PaymentInput, userId: string): Promise<ResultOutput> {
    if (!input.paymentId) return await this._create(input, userId);
    return await this._update(input, userId);
  }

  /**
   * 支払いの新規作成
   */
  private async _create(
    input: PaymentInput,
    userId: string,
  ): Promise<ResultOutput> {
    const paymentRepository = this.paymentRepository;
    const payment = paymentRepository.save({ ...input, userId });
    return new Result(payment).result;
  }

  /**
   * 支払いの更新
   */
  private async _update(
    input: PaymentInput,
    userId: string,
  ): Promise<ResultOutput> {
    const paymentRepository = this.paymentRepository;
    const dbPayment = await paymentRepository.findOne(input.paymentId);
    const payment = new Payment(dbPayment);

    if (!payment.isOwnPayment(userId))
      throw new BadRequestException('自身の支払い以外は更新できません。');

    const { paymentId, ...updateObject } = input;
    const update = await paymentRepository.update(payment.id, updateObject);
    return new Result(update).result;
  }
}
