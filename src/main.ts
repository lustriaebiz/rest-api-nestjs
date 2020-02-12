import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

/** swagger */
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/** csrf */
// import * as csurf from 'csurf';
// import * as rateLimit from 'express-rate-limit';
// import { LoggingInterceptor } from './common/interceptor/logging.interceptor';
// import { TransformInterceptor } from './common/interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // interceptor
  // app.useGlobalInterceptors(new LoggingInterceptor());
  // app.useGlobalInterceptors(new TransformInterceptor());

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

  
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

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
