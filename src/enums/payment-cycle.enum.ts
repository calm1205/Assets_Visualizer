import { registerEnumType } from '@nestjs/graphql';

/**
 * 日、週、月、年
 */
export enum PaymentCycle {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEAR = 'YEAR',
}

registerEnumType(PaymentCycle, {
  name: 'PaymentCycle',
  description: 'payment cycle',
});
