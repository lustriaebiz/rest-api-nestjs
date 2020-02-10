import { ApiProperty } from '@nestjs/swagger';

export class Login {
    @ApiProperty({ example: 'lustriaebiz@gmail.com', required: true })
    email: string;

    @ApiProperty({example: 'secret!@#', required: true })
    password: string;
}