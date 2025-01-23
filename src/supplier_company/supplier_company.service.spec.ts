import { Test, TestingModule } from '@nestjs/testing';
import { SupplierCompanyService } from './supplier_company.service';

describe('SupplierCompanyService', () => {
  let service: SupplierCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplierCompanyService],
    }).compile();

    service = module.get<SupplierCompanyService>(SupplierCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
