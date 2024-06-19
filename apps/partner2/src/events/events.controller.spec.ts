import { EventsService } from '@app/core/events/events.service';
import { Test, TestingModule } from '@nestjs/testing';
import { EventsController } from './events.controller';

describe('EventsController', () => {
  let service: EventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsService],
    }).compile();

    service = module.get<EventsController>(EventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
