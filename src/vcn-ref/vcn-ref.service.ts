import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VcnRef } from './vcn-ref.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VcnRefService {
    
    constructor(
        @InjectRepository(VcnRef) 
        private usersRepository: Repository<VcnRef>
    ){ }
}
