import { Test, TestingModule } from '@nestjs/testing';
import { HomeAgentResolver } from './home-agent.resolver';
import { HomeAgentService } from './home-agent.service';

describe('HomeAgentResolver', () => {
  let resolver: HomeAgentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeAgentResolver, HomeAgentService],
    }).compile();

    resolver = module.get<HomeAgentResolver>(HomeAgentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
