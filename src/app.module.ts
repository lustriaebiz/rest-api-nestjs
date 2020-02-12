import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

// task-schedule
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/user.entity';
import { VcnRefModule } from './vcn-ref/vcn-ref.module';
import { VcnRef } from './vcn-ref/vcn-ref.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/interceptor/logging.interceptor';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: '.development.env',
    // }),
    ScheduleModule.forRoot(),
    // TypeOrmModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestdb1',
      synchronize: false,
      entities: [User, VcnRef],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestdb2',
      synchronize: false,
      name: 'nestDb2Connection', //connection name
      entities: [User],
    }),
    UsersModule,
    AuthModule,
    TasksModule,
    VcnRefModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('auth', 'users');
  }
}
