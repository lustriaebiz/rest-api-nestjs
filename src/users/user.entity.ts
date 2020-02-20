import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
import { ApiProperty, ApiHideProperty, ApiExcludeEndpoint } from '@nestjs/swagger';

@Entity({
    database: 'nestdb2',
    name: 'users'
})

export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 25})
    @ApiProperty({ example: 'Lustria Ebiz', required: true })
    fullName: string;

    @Column('date')
    @ApiProperty({ example: '2020-01-20', required: true })
    birthdate: Date;

    @Column()
    @ApiProperty({ example: true, required: true })
    isActive: boolean;

    @Column()
    @ApiProperty({ example: 'lustriaebiz@gmail.com', required: true })
    email: string;

    @Column()
    @ApiProperty({ 
        example: 'secret!@#' ,
        description: 'password bebas',
        required: true
    })
    password: string;

}
