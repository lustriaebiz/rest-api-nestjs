import { Test, TestingModule } from '@nestjs/testing';
import { VcnRefService } from './vcn-ref.service';

describe('VcnRefService', () => {
  let service: VcnRefService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcnRefService],
    }).compile();

    service = module.get<VcnRefService>(VcnRefService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
