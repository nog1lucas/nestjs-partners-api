import { SpotsService } from '@app/core/spots/spots.service';
import { Test, TestingModule } from '@nestjs/testing';
import { SpotsController } from './spots.controller';

describe('SpotsController', () => {
  let service: SpotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpotsService],
    }).compile();

    service = module.get<SpotsService>(SpotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
