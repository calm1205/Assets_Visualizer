import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

import { IsConfirm } from './customValidator/isConfirm';
import { IsUnique } from './customValidator/isUnique';

@InputType({ description: 'ユーザ登録用Input' })
export class SignUpInput {
  @IsNotEmpty({ message: 'メールアドレスは必須です。' })
  @IsEmail({ message: 'メールアドレスの形式が不正です。' })
  @IsUnique('users', 'email', { message: 'そのメールアドレスは登録済みです。' })
  @Field({ description: 'メールアドレス' })
  email: string;

  @IsNotEmpty({ message: 'パスワードは必須です。' })
  @MinLength(8, { message: 'パスワードは8文字以上で入力してください。' })
  @MaxLength(40, { message: 'パスワードは40文字以下で入力してください。' })
  @Matches(/^(?=.*[a-z])(?=.*[0-9]).*$/, {
    message: 'パスワードは英数字を含む必要があります。',
  })
  @Field({ description: 'パスワード' })
  password: string;

  @IsNotEmpty({ message: '確認用パスワードは必須です。' })
  @IsConfirm('password', { message: '確認用パスワードが一致しません。' })
  @Field({ description: '確認用パスワード' })
  passwordConfirm: string;
}
