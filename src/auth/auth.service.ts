import { Injectable } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { UsersService } from  '../users/users.service'
import { User } from  '../users/user.entity';
import { Login } from 'src/auth/dto/login';
import { Register } from './dto/register';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    private async validate(userData: Login): Promise<User> {
        return await this.usersService.findByEmail(userData.email);
    }

    public async login(user: Login): Promise< any | { status: number }>{
        return this.validate(user).then((userData)=>{
          if(!userData){
            return { status: 404 };
          }
          let payload = `${userData.fullName}${userData.id}`;
          const accessToken = this.jwtService.sign(payload);

          return {
             expires_in: 3600,
             access_token: accessToken,
             user_id: payload,
             status: 200
          };

        });
    }

    public async register(user: Register): Promise<any>{
        return this.usersService.createUser(user)
    } 
}
