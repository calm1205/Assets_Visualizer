import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GQLModule } from './graphql.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    GQLModule,
    UserModule,
  ],
})
export class AppModule {}
