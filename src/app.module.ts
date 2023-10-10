import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { HomeDataModule } from './home-data/home-data.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HomeAgentModule } from './home-agent/home-agent.module';
import { HomeImageModule } from './home-image/home-image.module';

@Module({
  imports: [UserModule, HomeDataModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: true,
    driver:ApolloDriver
  }), HomeAgentModule, HomeImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

