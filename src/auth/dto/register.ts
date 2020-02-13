import { ApiProperty } from "@nestjs/swagger";

export class Register {
    
    @ApiProperty({example: 'Lustria', required: true})
    fullName: string;

    @ApiProperty({example: '2020-06-21', required: true})
    birthdate: Date;

    @ApiProperty({ example: 'lustria@gmail.com', required: true })
    email: string;

    @ApiProperty({example: 'secret!@#', required: true })
    password: string;

    @ApiProperty({example: true, required: true })
    isActive: boolean;
}
