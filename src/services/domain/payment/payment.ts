import { PaymentType } from '~/enums/payment-type.enum';

import { Price } from './price';
import { Satisfaction } from './satisfaction';
import { Title } from './title';

type PaymentInput = {
  id: string;
  userId: string;
  title: string;
  price: number;
  paymentDate: Date;
  paymentType: PaymentType;
  satisfaction: number;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * 支払い
 */
export class Payment {
  public readonly id: string;
  public readonly userId: string;
  public readonly title: Title;
  public readonly price: Price;
  public readonly paymentDate: Date;
  public readonly paymentType: PaymentType;
  public readonly satisfaction: Satisfaction;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(payment: PaymentInput) {
    this.id = payment.id;
    this.userId = payment.userId;
    this.title = new Title(payment.title);
    this.price = new Price(payment.price);
    this.paymentDate = payment.paymentDate;
    this.paymentType = payment.paymentType;
    this.satisfaction = new Satisfaction(payment.satisfaction);
    this.createdAt = payment.createdAt;
    this.updatedAt = payment.updatedAt;
  }

  /**
   * 自分の支払いか確認
   */
  isOwnPayment(userId: string) {
    return this.userId === userId;
  }
}
