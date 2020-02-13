import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {

constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
        console.log('~ roles guard ~');
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        console.log('data roles: ', roles);
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        console.log('data request: ', request);
      
    return true;
  }
}
