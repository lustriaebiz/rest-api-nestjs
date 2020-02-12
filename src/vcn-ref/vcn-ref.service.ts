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
        return await this.vcnRefRepository.find();
    }

    async getById(_id): Promise<VcnRef[]> {
        return await this.vcnRefRepository.find({'id': _id});
    }

    async getTodos(): Promise<any> {
        let url = 'https://jsonplaceholder.typicode.com/todos/1';

        return await axios.get(url)
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

    async postPosts(): Promise<any> {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let token = 'eyJhbGciOiJIUzI1NiJ9.THVzdHJpYSBFYml6MQ.aBzqh2TYO4CTXp1SM3ocd6pw4wcQCD0NM8GXfuwvL74';

        let body = JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        });

        let headers = {
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        await axios.post(url,body, headers).then(function(response){
            console.log('response: ', response);
            
        });

        return {status: true};
    }

}
