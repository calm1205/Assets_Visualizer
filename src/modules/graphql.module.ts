import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        autoSchemaFile: 'src/schema.gql',
        sortSchema: false,
        debug: true,
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()], // Apollo Sandbox
      }),
    }),
  ],
})
export class GQLModule {}
