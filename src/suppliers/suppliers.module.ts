import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './supplier.entity';
import { SuppliersService } from './suppliers.service';
import { SuppliersResolver } from './suppliers.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  providers: [SuppliersService, SuppliersResolver],
  exports: [SuppliersService],
})
export class SuppliersModule {}