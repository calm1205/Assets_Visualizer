import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Payment } from '~/entities/payment.entity';
import { User } from '~/entities/user.entity';
import { DeletePaymentInput } from '~/interfaces/inputs/deletePayment.input';
import { ResultOutput } from '~/interfaces/outputs/result.outputs';

import { Result } from '../result/result';

@Injectable()
export class DeletePaymentByIdService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async execute(input: DeletePaymentInput, user: User): Promise<ResultOutput> {
    const paymentId = input.paymentId;
    const paymentRepository = this.paymentRepository;

    const dbPayment = await paymentRepository.findOne(paymentId);

    if (!dbPayment.isOwnPayment(user.id))
      throw new BadRequestException('自身の支払い以外は削除できません。');

    const deleteResult = await paymentRepository.delete(paymentId);
    return new Result(deleteResult).result;
  }
}
