import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use CORS middleware
  app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001' ],// Accept requests from any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  }));

  // Use global validation pipes
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3002);
}

bootstrap();