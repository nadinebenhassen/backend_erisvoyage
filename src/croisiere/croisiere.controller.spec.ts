import { Test, TestingModule } from '@nestjs/testing';
import { CroisiereController } from './croisiere.controller';

describe('CroisiereController', () => {
  let controller: CroisiereController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CroisiereController],
    }).compile();

    controller = module.get<CroisiereController>(CroisiereController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
