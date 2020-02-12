import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VcnRef } from './vcn-ref.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VcnRefService {
    
    constructor(
        @InjectRepository(VcnRef) 
        private vcnRefRepository: Repository<VcnRef>
    ){ }

    async get(): Promise<VcnRef[]> {
        return await this.vcnRefRepository.find();
    }

    async getById(_id): Promise<VcnRef[]> {
        return await this.vcnRefRepository.find({'id': _id});
    }
}
