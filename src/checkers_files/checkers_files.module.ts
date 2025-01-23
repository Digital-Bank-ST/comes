import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckersFiles } from './entities/checkers_files.entity';
import { CheckersFilesService } from './checkers_files.service';
import { CheckersFilesController } from './checkers_files.controller';
import { SupplierCriteriaModule } from 'src/supplier_criteria/supplier_criteria.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CheckersFiles]),
    SupplierCriteriaModule,
  ],
  providers: [CheckersFilesService],
  controllers: [CheckersFilesController],
  exports: [CheckersFilesService],
})
export class CheckersFilesModule {}