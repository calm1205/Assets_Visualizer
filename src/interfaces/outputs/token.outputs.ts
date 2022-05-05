import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'jwtの返却型' })
export class Token {
  @Field({ description: 'JWT' })
  accessToken: string;
}
