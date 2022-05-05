import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'mutationの返却値' })
export class ResultOutput {
  @Field({ description: 'データ更新の成功可否' })
  result: boolean;
}
