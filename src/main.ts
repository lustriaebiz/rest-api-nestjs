import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/** swagger */
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupswagger(app);

  await app.listen(3000);
  
}

function setupswagger(app){
  const options = new DocumentBuilder()
    .setTitle('VCN API')
    .setDescription('Virtual Card Number by BNI')
    .setVersion('1.0')
    .addTag('vcn')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs-api', app, document);
}

bootstrap();
