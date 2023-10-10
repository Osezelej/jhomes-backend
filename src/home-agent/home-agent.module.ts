import { Module } from '@nestjs/common';
import { HomeAgentService } from './home-agent.service';
import { HomeAgentResolver } from './home-agent.resolver';
import { HomeDataModule } from 'src/home-data/home-data.module';

@Module({
  providers: [HomeAgentResolver, HomeAgentService, HomeAgentService],
  imports:[HomeDataModule]
})
export class HomeAgentModule {}
