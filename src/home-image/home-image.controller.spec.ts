import { Test, TestingModule } from '@nestjs/testing';
import { HomeImageController } from './home-image.controller';
import { HomeImageService } from './home-image.service';

describe('HomeImageController', () => {
  let controller: HomeImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeImageController],
      providers: [HomeImageService],
    }).compile();

    controller = module.get<HomeImageController>(HomeImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
