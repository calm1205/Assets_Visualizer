import { Field, InputType } from '@nestjs/graphql';

import { IsExist } from './customValidator/isExist';

@InputType({ description: '支払い削除用Input' })
export class DeletePaymentInput {
  @IsExist('payments', 'id', { message: '該当の支払いは存在しません。' })
  @Field({ description: '支払いId' })
  paymentId: string;
}
