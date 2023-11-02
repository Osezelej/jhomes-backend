import { Module } from '@nestjs/common';
import { HomeDataService } from './home-data.service';
import { HomeDataResolver } from './home-data.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeData } from './entities/home.entites';

@Module({
  providers: [HomeDataResolver, HomeDataService],
  exports:[HomeDataModule, HomeDataService], 
  imports:[TypeOrmModule.forFeature([HomeData])]
})
export class HomeDataModule {}
