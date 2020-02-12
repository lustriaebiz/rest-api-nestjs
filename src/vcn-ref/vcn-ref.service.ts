import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VcnRef } from './vcn-ref.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class VcnRefService {
    
    constructor(
        @InjectRepository(VcnRef) 
        private vcnRefRepository: Repository<VcnRef>
    ){ }

    async get(): Promise<VcnRef[]> {
        
         await axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            // handle success
            console.log(response);
            return response;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });

        return await this.vcnRefRepository.find();
    }

    async getById(_id): Promise<VcnRef[]> {
        return await this.vcnRefRepository.find({'id': _id});
    }

    async getTodos(): Promise<any> {
        return await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            return error;
          })
          .finally(function () {
              console.log('done');
              
          });
    }
}
