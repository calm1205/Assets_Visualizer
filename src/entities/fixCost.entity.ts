import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { PaymentCycle } from '~/enums/payment-cycle.enum';
import { PaymentType } from '~/enums/payment-type.enum';

import { User } from './user.entity';

@Entity({ name: 'fix_costs' })
@ObjectType({ description: '固定費' })
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id' })
  id: string;

  @ManyToOne(() => User, (_) => _.payments)
  user: User;

  @Column()
  @Field({ description: 'ユーザId' })
  userId: string;

  @Column()
  @Field({ description: '支払いタイトル' })
  name: string;

  @Column()
  @Field(() => Int, { description: '支払い金額' })
  price: number;

  @Column()
  @Field(() => PaymentCycle, { description: '支払頻度' })
  paymentCycle: PaymentCycle;

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
