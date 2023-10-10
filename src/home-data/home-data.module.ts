import { Module } from '@nestjs/common';
import { HomeDataService } from './home-data.service';
import { HomeDataResolver } from './home-data.resolver';


@Module({
  providers: [HomeDataResolver, HomeDataService],
  exports:[HomeDataModule, HomeDataService]
})
export class HomeDataModule {}
