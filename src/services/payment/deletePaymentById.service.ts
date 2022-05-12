import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PaymentEntity } from '~/entities/payment.entity';
import { User } from '~/entities/user.entity';
import { DeletePaymentInput } from '~/interfaces/inputs/deletePayment.input';
import { ResultOutput } from '~/interfaces/outputs/result.outputs';

import { Payment } from '../domain/payment/payment';
import { Result } from '../result/result';

@Injectable()
export class DeletePaymentByIdService {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>,
  ) {}

  async execute(input: DeletePaymentInput, user: User): Promise<ResultOutput> {
    const paymentId = input.paymentId;
    const dbPayment = await this.paymentRepository.findOne(paymentId);
    const payment = new Payment(dbPayment);

    if (!payment.isOwnPayment(user.id))
      throw new BadRequestException('自身の支払い以外は削除できません。');

    const deleteResult = await this.paymentRepository.delete(paymentId);
    return new Result(deleteResult).result;
  }
}
