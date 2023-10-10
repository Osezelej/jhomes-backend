import { Test, TestingModule } from '@nestjs/testing';
import { HomeImageService } from './home-image.service';

describe('HomeImageService', () => {
  let service: HomeImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeImageService],
    }).compile();

    service = module.get<HomeImageService>(HomeImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
