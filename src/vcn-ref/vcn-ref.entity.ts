import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({
    name: 'vcn-ref',
    database: 'nestdb1'
})


export class VcnRef {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiProperty({example: 'f44fecd22f599471aa446ef5b642eeb5', required: true })
    trace_id: string;

    @Column()
    @ApiProperty({ example: 'Lustria Ebiz', required: true })
    va_number_1: number;

    @Column()
    @ApiProperty({ example: 'Lustria Ebiz', required: true })
    va_number_2: number;
}
