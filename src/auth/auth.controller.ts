import { Controller, Post, Body, UsePipes } from  '@nestjs/common';
import { AuthService } from  '../auth/auth.service';
import { User } from  '../users/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { Login } from 'src/auth/dto/login';
import { registerPipe } from 'src/common/pipes/register.pipe';
import { Register } from './dto/register';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private  readonly  authService:  AuthService) {

    }

    @Post('login')
    async login(@Body() login: Login): Promise<any> {
      return this.authService.login(login);
    }  

    @Post('register')
    @UsePipes(new registerPipe(Register))
    async register(@Body() user: Register): Promise<any> {
      return this.authService.register(user);
    }  
}
