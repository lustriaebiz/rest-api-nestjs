import { Controller, Post, Body } from  '@nestjs/common';
import { AuthService } from  '../auth/auth.service';
import { User } from  '../users/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { Login } from 'src/shared/login.dto';

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
    async register(@Body() user: User): Promise<any> {
      return this.authService.register(user);
    }  
}
