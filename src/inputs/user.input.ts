import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType({ description: 'ユーザ登録用Input' })
export class UserInput {
  @IsNotEmpty({ message: 'メールアドレスは必須です。' })
  @IsEmail()
  @Field({ description: 'メールアドレス' })
  email: string;

  @IsNotEmpty({ message: 'パスワードは必須です。' })
  @Field({ description: 'パスワード' })
  password: string;
}
