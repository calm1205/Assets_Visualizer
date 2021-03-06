import { registerEnumType } from '@nestjs/graphql';

/**
 * 消費、浪費、投資
 */
export enum PaymentType {
  EXPENSES = 'EXPENSES',
  WASTE = 'WASTE',
  INVESTMENT = 'INVESTMENT',
  SELF_INVESTMENT = 'SELF_INVESTMENT',
}

registerEnumType(PaymentType, {
  name: 'PaymentType',
  description: 'payment type',
});
