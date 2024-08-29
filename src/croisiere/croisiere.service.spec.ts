import { Test, TestingModule } from '@nestjs/testing';
import { CroisiereService } from './croisiere.service';

describe('CroisiereService', () => {
  let service: CroisiereService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CroisiereService],
    }).compile();

    service = module.get<CroisiereService>(CroisiereService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
