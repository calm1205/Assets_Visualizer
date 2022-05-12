import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, Min, ValidateIf } from 'class-validator';

import { PaymentPeriod } from '~/enums/payment-cycle.enum';
import { PaymentType } from '~/enums/payment-type.enum';

import { IsExist } from './customValidator/isExist';

@InputType({ description: '定期支払い登録/更新用Input' })
export class PeriodecPaymentInput {
  @IsExist('periodec_payments', 'id', {
    message: 'その定期支払いは存在しません。',
  })
  @ValidateIf((_) => !!_.periodecPaymentId)
  @Field({ nullable: true, description: '定期支払いId' })
  periodecPaymentId?: string;

  @IsNotEmpty({ message: '定期支払いタイトルは必須です。' })
  @MaxLength(40, { message: '定期支払いタイトルは40文字までです。' })
  @Field({ description: '定期支払いタイトル' })
  title: string;

  @IsNotEmpty({ message: '金額は必須です。' })
  @Min(0, { message: '金額は0以上を指定してください。' })
  @Field(() => Int, { description: '金額' })
  price: number;

  @IsNotEmpty({ message: '支払い頻度は必須です。' })
  @Field(() => PaymentPeriod, { description: '支払い頻度' })
  paymentPeriod: PaymentPeriod;

  @IsNotEmpty({ message: '支払いジャンルは必須です。' })
  @Field(() => PaymentType, { description: '支払いジャンル' })
  paymentType: PaymentType;

  @Field(() => Float, { defaultValue: 0.0, description: '年利' })
  annualInterest?: number;
}
