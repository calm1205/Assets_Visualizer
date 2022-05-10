import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { PaymentType } from '~/enums/payment-type.enum';

import { User } from './user.entity';

@Entity({ name: 'payments' })
@ObjectType({ description: '支払い' })
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id' })
  id: string;

  @ManyToOne(() => User, (_) => _.payments)
  user: User;

  @Column('uuid')
  @Field({ description: 'ユーザId' })
  userId: string;

  @Column('character varying', { length: 40 })
  @Field({ description: '支払いタイトル' })
  name: string;

  @Column()
  @Field(() => Int, { description: '支払い金額' })
  price: number;

  @Column({ default: new Date() })
  @Field(() => Date, { description: '支払日' })
  paymentDate: Date;

  @Column()
  @Field(() => PaymentType, { description: '支払いジャンル' })
  paymentType: PaymentType;

  @Column('smallint', { nullable: true })
  @Field(() => Int, { nullable: true, description: '満足度' })
  satisfaction: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
  readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
  readonly updatedAt: Date;
}
