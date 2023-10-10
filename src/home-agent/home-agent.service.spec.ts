import { Test, TestingModule } from '@nestjs/testing';
import { HomeAgentService } from './home-agent.service';

describe('HomeAgentService', () => {
  let service: HomeAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeAgentService],
    }).compile();

    service = module.get<HomeAgentService>(HomeAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
