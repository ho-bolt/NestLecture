import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // 등록!
  app.useGlobalFilters(new HttpExceptionFilter()); // app에 대해서 글로벌로 필터링 추가
  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();
