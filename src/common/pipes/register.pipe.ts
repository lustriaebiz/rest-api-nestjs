import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class registerPipe implements PipeTransform {
  constructor(private readonly schema: Object) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    value.password = await this.hashPassword(value.password);
    return value;
  }

  async hashPassword(password) {
    let saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

}