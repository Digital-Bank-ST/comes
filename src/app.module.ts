import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuppliersModule } from './suppliers/suppliers.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoryTypeModule } from './category_type/category_type.module';
import { CategoryModule } from './category/category.module';
import { SupplierSubcategoryModule } from './supplier_subcategory/supplier_subcategory.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { AuthorizationsModule } from './authorizations/authorizations.module';
import { ContactModule } from './contact/contact.module';
import { TypeCriteriaModule } from './type_criteria/type_criteria.module';
import { CriteriaModule } from './criteria/criteria.module';
import { ComplianceLevelModule } from './compliance_level/compliance_level.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // aquí puedes controlar la creación automática de los cambios en la base de datos
        connectTimeout: 30000
      }),
      inject: [ConfigService],
    }),
    SuppliersModule,
    CategoryTypeModule,
    CategoryModule,
    SupplierSubcategoryModule,
    SubcategoryModule,
    AuthorizationsModule,
    ContactModule,
    TypeCriteriaModule,
    CriteriaModule,
    ComplianceLevelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}