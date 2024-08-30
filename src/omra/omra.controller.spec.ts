import { Test, TestingModule } from '@nestjs/testing';
import { OmraController } from './omra.controller';

describe('OmraController', () => {
  let controller: OmraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OmraController],
    }).compile();

    controller = module.get<OmraController>(OmraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
