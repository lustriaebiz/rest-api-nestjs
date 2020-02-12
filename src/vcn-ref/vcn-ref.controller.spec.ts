import { Test, TestingModule } from '@nestjs/testing';
import { VcnRefController } from './vcn-ref.controller';

describe('VcnRef Controller', () => {
  let controller: VcnRefController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VcnRefController],
    }).compile();

    controller = module.get<VcnRefController>(VcnRefController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
