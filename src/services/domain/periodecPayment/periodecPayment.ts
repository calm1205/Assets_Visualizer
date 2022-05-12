import { PaymentPeriod } from '~/enums/payment-cycle.enum';
import { PaymentType } from '~/enums/payment-type.enum';

import { AnnualInterest } from './annualInterest';
import { Price } from './price';
import { Title } from './title';

type PeriodecPaymentInput = {
  id: string;
  userId: string;
  title: string;
  price: number;
  paymentPeriod: PaymentPeriod;
  paymentType: PaymentType;
  annualInterest: number;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * 定期支払い
 */
export class PeriodecPayment {
  public readonly id: string;
  public readonly userId: string;
  public readonly title: Title;
  public readonly price: Price;
  public readonly paymentPeriod: PaymentPeriod;
  public readonly paymentType: PaymentType;
  public readonly annualInterest: AnnualInterest;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(input: PeriodecPaymentInput) {
    this.id = input.id;
    this.userId = input.userId;
    this.title = new Title(input.title);
    this.price = new Price(input.price);
    this.paymentPeriod = input.paymentPeriod;
    this.paymentType = input.paymentType;
    this.annualInterest = new AnnualInterest(input.annualInterest);
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
  }

  /**
   * 自分の支払いか確認
   */
  isOwnPeriodecPayment(userId: string) {
    return this.userId === userId;
  }
}
