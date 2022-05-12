import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PeriodecPaymentEntity } from '~/entities/periodecPayment.entity';
import { PeriodecPaymentInput } from '~/interfaces/inputs/periodecPayment.input';
import { ResultOutput } from '~/interfaces/outputs/result.outputs';

import { PeriodecPayment } from '../domain/periodecPayment/periodecPayment';
import { Result } from '../result/result';

@Injectable()
export class UpsertPeriodecPaymentService {
  constructor(
    @InjectRepository(PeriodecPaymentEntity)
    private readonly PeriodecpaymentRepository: Repository<PeriodecPaymentEntity>,
  ) {}

  async execute(
    input: PeriodecPaymentInput,
    userId: string,
  ): Promise<ResultOutput> {
    if (!input.periodecPaymentId) return await this._create(input, userId);
    return await this._update(input, userId);
  }

  /**
   * 定期支払いの新規作成
   */
  private async _create(
    input: PeriodecPaymentInput,
    userId: string,
  ): Promise<ResultOutput> {
    const periodecpaymentRepository = this.PeriodecpaymentRepository;
    const Periodecpayment = periodecpaymentRepository.save({
      ...input,
      userId,
    });
    return new Result(Periodecpayment).result;
  }

  /**
   * 定期支払いの更新
   */
  private async _update(
    input: PeriodecPaymentInput,
    userId: string,
  ): Promise<ResultOutput> {
    const periodecpaymentRepository = this.PeriodecpaymentRepository;
    const dbPeriodecPayment = await periodecpaymentRepository.findOne(
      input.periodecPaymentId,
    );
    const periodecPayment = new PeriodecPayment(dbPeriodecPayment);

    if (!periodecPayment.isOwnPeriodecPayment(userId))
      throw new BadRequestException('自身の支払い以外は更新できません。');

    const { periodecPaymentId, ...updateObject } = input;
    const update = await periodecpaymentRepository.update(
      periodecPayment.id,
      updateObject,
    );
    return new Result(update).result;
  }
}
