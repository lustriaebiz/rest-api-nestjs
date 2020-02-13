import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInterface } from './user.interface.interface';
import { Register } from 'src/auth/dto/register';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private usersRepository: Repository<User>
    ){ }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({'id': _id});
    }

    async findByEmail(email: string): Promise<User> {
        return await this.usersRepository.findOne({
            where: {
                email: email,
            }
        });
    }

    async createUser(user: Register){
        console.log('register: ', user);
        
        return await this.usersRepository.save(user);
    }

    async updateUser(user: User) {
        return await  this.usersRepository.save(user)
    }

    async deleteUser(id:number) {
        return await this.usersRepository.delete(id);
    }
}
