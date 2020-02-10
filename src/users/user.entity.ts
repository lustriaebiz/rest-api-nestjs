import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
import { ApiProperty, ApiHideProperty, ApiExcludeEndpoint } from '@nestjs/swagger';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 25})
    @ApiProperty({ example: 'Lustria Ebiz', required: false })
    fullName: string;

    @Column('date')
    @ApiProperty({ example: '2020-01-20', required: false })
    birthdate: Date;

    @Column()
    @ApiProperty({ example: true, required: false })
    isActive: boolean;

    @Column()
    @ApiProperty({ example: 'lustriaebiz@gmail.com', required: false })
    email: string;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }

    @Column()
    @ApiProperty({ 
        example: 'secret!@#' ,
        description: 'password bebas',
        required: false
    })
    password: string;

}
