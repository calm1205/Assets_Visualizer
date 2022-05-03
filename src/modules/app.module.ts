import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GQLModule } from './graphql.module';
import { UsersModule } from './user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    GQLModule,
    UsersModule,
  ],
})
export class AppModule {}
