import { Test, TestingModule } from '@nestjs/testing';
import { GalaController } from './gala.controller';

describe('GalaController', () => {
  let controller: GalaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GalaController],
    }).compile();

    controller = module.get<GalaController>(GalaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
