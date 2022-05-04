import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType({ description: 'ログイン用Input' })
export class SignInInput {
  @IsNotEmpty({ message: 'メールアドレスは必須です。' })
  @IsEmail({ message: 'メールアドレスの形式が不正です。' })
  @Field({ description: 'メールアドレス' })
  email: string;

  @IsNotEmpty({ message: 'パスワードは必須です。' })
  @Field({ description: 'パスワード' })
  password: string;
}
