import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '~/entities/user.entity';
import { GqlAuthGuard } from '~/services/auth/guards/gql-auth.guard';
import { JwtStrategy } from '~/services/auth/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [JwtStrategy, GqlAuthGuard],
  exports: [JwtStrategy, GqlAuthGuard],
})
export class AuthModule {}
