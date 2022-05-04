import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth.module';
import { GQLModule } from './graphql.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    GQLModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
