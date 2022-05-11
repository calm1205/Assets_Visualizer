import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsDate,
  IsNotEmpty,
  Max,
  MaxLength,
  Min,
  ValidateIf,
} from 'class-validator';

import { PaymentType } from '~/enums/payment-type.enum';

import { IsExist } from './customValidator/isExist';

@InputType({ description: '支払い記帳用Input' })
export class PaymentInput {
  @IsExist('payments', 'id', { message: '該当の支払いは存在しません。' })
  @ValidateIf((_) => !!_.paymentId)
  @Field({ nullable: true, description: '支払いId' })
  paymentId?: string;

  @IsNotEmpty({ message: '支払いタイトルは必須です。' })
  @MaxLength(40, { message: '支払いタイトルは40文字までです。' })
  @Field({ description: '支払いタイトル' })
  title: string;

  @IsNotEmpty({ message: '金額は必須です。' })
  @Min(0, { message: '金額は0以上を指定してください。' })
  @Field(() => Int, { description: '金額' })
  price: number;

  @IsDate()
  @Field(() => Date, {
    nullable: true,
    defaultValue: new Date(),
    description: '支払い日時',
  })
  paymentDate?: string;

  @IsNotEmpty({ message: '支払いジャンルは必須です。' })
  @Field(() => PaymentType, { description: '支払いジャンル' })
  paymentType: PaymentType;

  @IsNotEmpty({ message: '満足度は必須です。' })
  @Min(1, { message: '満足度は1以上を指定してください。' })
  @Max(100, { message: '満足度は100以下を指定してください。' })
  @ValidateIf((_) => _.satisfaction === 0 || !!_.satisfaction)
  @Field(() => Int, { nullable: true, description: '満足度' })
  satisfaction?: number;
}
