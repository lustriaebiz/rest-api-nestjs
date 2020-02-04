import { Controller, Post, Body, Get, Put, Delete,Param, ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

/** db transaction */
import { getConnection } from "typeorm";
import { ApiHeader, ApiResponse } from '@nestjs/swagger';

/** header */
@ApiHeader({
    name: 'Auth',
    description: 'Auth token',
})
/** */

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    
    @Get()
    @ApiResponse({ status: 201, description: 'The record has been successfully get.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    get() {
        return this.service.getUsers();
    }

    @Get(':id')
    getById(@Param('id', new ParseIntPipe()) id: number) {
        return this.service.getUser(id);
    }

    // @Post()
    // create(@Body() user: User) {
    //     return this.service.createUser(user);
    // }

    @Post('/dbtrx')
    
    async trx(@Body() user: User) {
        console.log('masuk');
        

        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();

        await queryRunner.connect();
        // await queryRunner.query("SELECT * FROM user");
        // const users = await queryRunner.manager.find(User);

        await queryRunner.startTransaction();

    try {

        // execute some operations on this transaction:
        /** 1 */
        let QInsertUser = `INSERT INTO user (fullName, birthdate, isActive) VALUES ('${user.fullName}','${user.birthdate}', '${user.isActive}')`;
        let Exec = await queryRunner.query(QInsertUser);
        
        /** 2 */
        let QInactiveUser = `UPDATE user SET isActive = 'false' WHERE id = ${Exec.insertId}`;
        await queryRunner.query(QInactiveUser);

        // commit transaction now:
        await queryRunner.commitTransaction();
        console.log('commit');

    } catch (err) {
        console.log('rollback');

        // since we have errors lets rollback changes we made
        await queryRunner.rollbackTransaction();

    } finally {
        console.log('release');

        // you need to release query runner which is manually created:
        await queryRunner.release();
    }


        /** ELSE */
        
        // await getConnection().transaction(async entityManager => {
        //     await this.service.createUser(user);
        //     let userUpdate : User = {
        //             'id': 1,
        //             'fullName': 'Lustria',
        //             'birthdate': new Date('2020-06-01'),
        //             'isActive': true
        //     };

        //     await this.service.updateUser(userUpdate);
        //     // ...
        // });
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}