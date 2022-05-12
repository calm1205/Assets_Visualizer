import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PeriodecPaymentEntity } from '~/entities/periodecPayment.entity';

@Injectable()
export class FindPeriodecPaymentByIdService {
  constructor(
    @InjectRepository(PeriodecPaymentEntity)
    private readonly PeriodecpaymentRepository: Repository<PeriodecPaymentEntity>,
  ) {}

  async execute(periodecpaymentId: string): Promise<PeriodecPaymentEntity> {
    const Periodecpayment = await this.PeriodecpaymentRepository.findOne(
      periodecpaymentId,
    );
    if (!Periodecpayment) throw new NotFoundException();
    return Periodecpayment;
  }
}
