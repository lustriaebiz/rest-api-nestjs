import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AxiosService {
    
    protected url = 'https://jsonplaceholder.typicode.com/posts';
    protected token = 'eyJhbGciOiJIUzI1NiJ9.THVzdHJpYSBFYml6MQ.aBzqh2TYO4CTXp1SM3ocd6pw4wcQCD0NM8GXfuwvL74';

    constructor() {
        axios.defaults.baseURL = this.url;
        axios.defaults.headers.common['Authorization'] = this.token;
        axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
    }


    async post_json(body:any = false): Promise<any> {
        return await axios.post(this.url,body).then(function(response){
            return response.data;
        });
    }

    async post_params(data:any): Promise<any> {
        const params = new URLSearchParams();

        /** set params */
        params.append('param1', 'value1');
        params.append('param2', 'value2');

        data.forEach(element => {
            params.append(element.key, element.value);
        });

        return await axios.post(this.url, params).then(function(response){
            return response.data;
        })
    }

    async get(): Promise<any> {
        return await axios.get(this.url)
        .then(function(response){
            return response.data;
        }).catch(function(error){
            // save log
            console.log('error axios get: ', error);
            
        }).finally(function(){

        })
    }

    async put(data:any = false): Promise<any> {

    }

    async delete(data:any = false): Promise<any> {
        
    }

    async patch(data:any = false): Promise<any> {
        
    }

    async options(data:any = false): Promise<any> {
        
    }

    async request(data:any = false): Promise<any> {
        
    }
}
