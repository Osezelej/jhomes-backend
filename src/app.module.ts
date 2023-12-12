import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { HomeDataModule } from './home-data/home-data.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HomeAgentModule } from './home-agent/home-agent.module';
import { HomeImageModule } from './home-image/home-image.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import {JhomeAgent as UserEntity } from './user/entities/user.entity';
import { HomeData } from './home-data/entities/home.entites';
import { MongodbService } from './home-data/mongo.service';
import { AuthModule } from './auth/auth.module';
import { JHomeUser } from './auth/jhomeuser.entity';
@Module({
  imports: [
    UserModule, 
    HomeDataModule, 
    GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: true,
    driver:ApolloDriver
  }), 
  HomeAgentModule, 
  ServeStaticModule.forRootAsync({
    useFactory:()=>{
      const uploadPath = join(__dirname, '..', 'src', 'home-image', 'assets');
      console.log(uploadPath)
      return[
        {
          rootPath: uploadPath,
          renderPath:"/assets",
        }
      ] 
      
    }
    
  }),
  HomeImageModule,
  TypeOrmModule.forRoot({
    type:'mongodb',
    url:'mongodb+srv://osezelejoseph:7bKIQUXHBfa6ACT1@cluster0.7uwgrbb.mongodb.net/?retryWrites=true&w=majority',
    entities:[UserEntity, HomeData, JHomeUser],
    synchronize:true,
    useUnifiedTopology:true
  }),
  AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

