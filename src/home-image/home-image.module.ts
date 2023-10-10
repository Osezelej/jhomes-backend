import { Module } from '@nestjs/common';
import { HomeImageService } from './home-image.service';
import { HomeImageController } from './home-image.controller';

@Module({
  controllers: [HomeImageController],
  providers: [HomeImageService],
})
export class HomeImageModule {}
