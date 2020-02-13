import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/common/guard/roles.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    UsersService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  controllers: [UsersController]
})
export class UsersModule {}
