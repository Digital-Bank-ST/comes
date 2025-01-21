import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CategoryTypeService } from './category_type.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const categoryTypeService = app.get(CategoryTypeService);

  await categoryTypeService.create('product');
  await categoryTypeService.create('services');

  await app.close();
}

bootstrap();