import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { PaymentPeriod } from '~/enums/payment-cycle.enum';
import { PaymentType } from '~/enums/payment-type.enum';

import { User } from './user.entity';

@Entity({ name: 'periodec_payments' })
@ObjectType({ description: '定期支払テーブル' })
export class PeriodecPaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id' })
  id: string;

  @ManyToOne(() => User, (_) => _.periodecPayments)
  user: User;

  @Column()
  @Field({ description: 'ユーザId' })
  userId: string;

  @Column()
  @Field({ description: '支払いタイトル' })
  title: string;

  @Column()
  @Field(() => Int, { description: '支払い金額' })
  price: number;

  @Column()
  @Field(() => PaymentPeriod, { description: '支払頻度' })
  paymentPeriod: PaymentPeriod;

  @Column()
  @Field(() => PaymentType, { description: '支払いジャンル' })
  paymentType: PaymentType;

  @Column({ type: 'float', default: 0.0 })
  @Field(() => Float, { description: '年利(%)' })
  annualInterest: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
  readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
  readonly updatedAt: Date;
}
