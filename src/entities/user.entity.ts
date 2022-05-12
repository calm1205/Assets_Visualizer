import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { PaymentEntity } from './payment.entity';
import { PeriodecPaymentEntity } from './periodecPayment.entity';

@Entity({ name: 'users' })
@ObjectType({ description: 'ユーザ' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id' })
  id: string;

  @Column({ unique: true })
  @Field({ description: 'メールアドレス' })
  email: string;

  @Column()
  @Field({ description: 'パスワード' })
  password: string;

  @OneToMany(() => PaymentEntity, (_) => _.user)
  payments: PaymentEntity[];

  @OneToMany(() => PeriodecPaymentEntity, (_) => _.user)
  periodecPayments: PeriodecPaymentEntity[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
  readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
  readonly updatedAt: Date;
}
