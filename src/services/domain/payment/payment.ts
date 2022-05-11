import { PaymentType } from '~/enums/payment-type.enum';

import { Price } from './price';
import { Satisfaction } from './satisfaction';
import { Title } from './title';

type PaymentInput = {
  id: string;
  userId: string;
  title: Title;
  price: Price;
  paymentDate: Date;
  paymentType: PaymentType;
  satisfaction: Satisfaction;
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
    this.title = payment.title;
    this.price = payment.price;
    this.paymentDate = payment.paymentDate;
    this.paymentType = payment.paymentType;
    this.satisfaction = payment.satisfaction;
    this.createdAt = payment.createdAt;
    this.updatedAt = payment.updatedAt;
  }

  isOwnPayment(userId: string) {
    this.userId === userId;
  }
}
