import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
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

@Module({
  imports: [
    ScheduleModule.forRoot(),
    // TypeOrmModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestdb1',
      synchronize: true,
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
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('auth', 'users');
  }
}
