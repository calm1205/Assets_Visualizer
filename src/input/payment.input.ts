import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDate, IsNotEmpty } from 'class-validator';
import { PaymentType } from '~/enum/payment-type.enum';
import { IsUserExist } from './customValidator/isUserExist';

@InputType({ description: '支払い記帳用Input' })
export class PaymentInput {
  @IsUserExist({ message: 'そのユーザは存在しません。' })
  @Field({ description: 'ユーザId' })
  userId: string;

  @IsNotEmpty({ message: '支払いタイトルは必須です。' })
  @Field({ description: '支払いタイトル' })
  name: string;

  @IsNotEmpty({ message: '金額は必須です。' })
  @Field(() => Int, { description: '金額' })
  price: number;

  @IsDate()
  @Field(() => Date, { nullable: true, description: '支払い日時' })
  paymentDate?: string;

  @IsNotEmpty({ message: '支払いジャンルは必須です。' })
  @Field(() => PaymentType, { description: '支払いジャンル' })
  paymentType: PaymentType;

  @IsNotEmpty({ message: '満足度は必須です。' })
  @Field(() => Int, { description: '満足度' })
  score: number;
}
