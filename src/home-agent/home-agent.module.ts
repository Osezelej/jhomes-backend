import { Module } from '@nestjs/common';
import { HomeAgentService } from './home-agent.service';
import { HomeAgentResolver } from './home-agent.resolver';
import { HomeDataModule } from 'src/home-data/home-data.module';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [HomeAgentResolver, HomeAgentService, ],
  imports:[HomeDataModule, UserModule]
})
export class HomeAgentModule {}
