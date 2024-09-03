import { Test, TestingModule } from '@nestjs/testing';
import { GalaService } from './gala.service';

describe('GalaService', () => {
  let service: GalaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GalaService],
    }).compile();

    service = module.get<GalaService>(GalaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
