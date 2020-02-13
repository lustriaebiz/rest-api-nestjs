import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    let bearerToken = req.headers.authorization;
    
    console.log('~ middleware ~');
    console.log('Authorization Bearer: ', bearerToken);
    
    next();
  }
}