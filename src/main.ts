import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/** swagger */
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/** csrf */
import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupswagger(app);

  /** Cross-origin resource sharing */
  app.enableCors();

  /** Cross-site request forgery */
  // app.use(csurf());

  // app.use(
  //   rateLimit({
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 1000, // limit each IP to 100 requests per windowMs
  //   }),
  // );

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
