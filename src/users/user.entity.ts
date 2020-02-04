import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    @ApiProperty({ example: 2 })
    id: number;

    @Column({length: 25})
    @ApiProperty({ example: 'Lustria Ebiz' })
    fullName: string;

    @Column('date')
    @ApiProperty({ example: '2020-01-20' })
    birthdate: Date;

    @Column()
    @ApiProperty({ example: true })
    isActive: boolean;

    @Column()
    @ApiProperty({ example: 'lustriaebiz@gmail.com' })
    email: string;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }

    @Column()
    @ApiProperty({ 
        example: 'secret!@#' ,
        description: 'password bebas'
    })
    password: string;

}
