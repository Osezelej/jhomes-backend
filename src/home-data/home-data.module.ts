import { Module } from '@nestjs/common';
import { HomeDataService } from './home-data.service';
import { HomeDataResolver } from './home-data.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeData } from './entities/home.entites';
import { AppModule } from 'src/app.module';
import { MongodbService } from './mongo.service';

@Module({
  providers: [HomeDataResolver, HomeDataService, MongodbService],
  exports:[HomeDataModule, HomeDataService], 
  imports:[TypeOrmModule.forFeature([HomeData])]
})
export class HomeDataModule {}
