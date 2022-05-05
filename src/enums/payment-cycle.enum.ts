import { registerEnumType } from '@nestjs/graphql';

/**
 * 日、週、月、年
 */
export enum PaymentPeriod {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEAR = 'YEAR',
}

registerEnumType(PaymentPeriod, {
  name: 'PaymentPeriod',
  description: 'payment cycle',
});
