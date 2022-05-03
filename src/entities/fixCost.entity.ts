import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PaymentCycle } from '~/enum/payment-cycle.enum';
import { PaymentType } from '~/enum/payment-type.enum';
import { User } from './user.entity';

@Entity({ name: 'fixCosts' })
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
  @Field(() => PaymentCycle, { description: '支払日' })
  paymentCycle: PaymentCycle;

  @Column()
  @Field(() => PaymentType, { description: '支払いジャンル' })
  paymentType: PaymentType;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
  readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
  readonly updatedAt: Date;
}
