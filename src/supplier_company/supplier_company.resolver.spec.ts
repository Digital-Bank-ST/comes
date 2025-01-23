import { Test, TestingModule } from '@nestjs/testing';
import { SupplierCompanyResolver } from './supplier_company.resolver';
import { SupplierCompanyService } from './supplier_company.service';

describe('SupplierCompanyResolver', () => {
  let resolver: SupplierCompanyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplierCompanyResolver, SupplierCompanyService],
    }).compile();

    resolver = module.get<SupplierCompanyResolver>(SupplierCompanyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
