import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/** swagger */
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


import * as expressListRoutes from 'express-list-routes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupswagger(app);

  await app.listen(3000);
  
  const server = app.getHttpServer();
  const router = server._events.request._router;
  console.log(expressListRoutes({}, 'API:', router));
}

function setupswagger(app){
  const options = new DocumentBuilder()
    .setTitle('VCN API')
    .setDescription('Virtual Card Number by BNI')
    .setVersion('1.0')
    .addTag('vcn')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs-api', app, document);
}

bootstrap();
