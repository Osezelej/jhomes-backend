import { Test, TestingModule } from '@nestjs/testing';
import { HomeDataResolver } from './home-data.resolver';
import { HomeDataService } from './home-data.service';

describe('HomeDataResolver', () => {
  let resolver: HomeDataResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeDataResolver, HomeDataService],
    }).compile();

    resolver = module.get<HomeDataResolver>(HomeDataResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
