import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

import { PaymentPeriod } from '~/enums/payment-cycle.enum';
import { PaymentType } from '~/enums/payment-type.enum';

import { IsExist } from './customValidator/isExist';

@InputType({ description: '固定費登録用Input' })
export class PeriodecPaymentInput {
  @IsExist('users', 'user_id', { message: 'そのユーザは存在しません。' })
  @Field({ description: 'ユーザId' })
  userId: string;

  @IsNotEmpty({ message: '支払いタイトルは必須です。' })
  @Field({ description: '支払いタイトル' })
  title: string;

  @IsNotEmpty({ message: '金額は必須です。' })
  @Field(() => Int, { description: '金額' })
  price: number;

  @IsNotEmpty({ message: '支払い頻度は必須です。' })
  @Field(() => PaymentPeriod, { description: '支払い頻度' })
  paymentPeriod?: PaymentPeriod;

  @IsNotEmpty({ message: '支払いジャンルは必須です。' })
  @Field(() => PaymentType, { description: '支払いジャンル' })
  paymentType: PaymentType;

  @Field(() => Float, { nullable: true, description: '年利' })
  annualInterest?: number;
}
