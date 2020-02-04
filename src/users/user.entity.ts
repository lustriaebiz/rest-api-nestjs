import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 25})
    fullName: string;

    @Column('date')
    birthdate: Date;

    @Column()
    isActive: boolean;

    @Column()
    email: string;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }

    @Column()
    password: string;

}
