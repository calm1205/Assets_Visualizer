import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PaymentEntity } from '~/entities/payment.entity';

@Injectable()
export class FindPaymentByIdService {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>,
  ) {}

  async execute(paymentId: string): Promise<PaymentEntity> {
    const payment = await this.paymentRepository.findOne(paymentId);
    if (!payment) throw new NotFoundException();
    return payment;
  }
}
