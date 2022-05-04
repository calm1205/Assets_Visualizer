import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Token {
  @Field({ description: 'JWT' })
  accessToken: string;
}
