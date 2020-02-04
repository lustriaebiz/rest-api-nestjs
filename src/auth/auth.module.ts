import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secretOrPrivateKey: 'secret12356789'
    })
  ],
  providers: [UsersService, AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
