import { Test, TestingModule } from '@nestjs/testing';
import { OmraService } from './omra.service';

describe('OmraService', () => {
  let service: OmraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OmraService],
    }).compile();

    service = module.get<OmraService>(OmraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
