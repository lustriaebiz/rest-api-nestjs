import { Module } from '@nestjs/common';
import { VcnRefService } from './vcn-ref.service';
import { VcnRefController } from './vcn-ref.controller';
import { VcnRef } from './vcn-ref.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([VcnRef]),
  ],
  providers: [VcnRefService],
  controllers: [VcnRefController]
})
export class VcnRefModule {}
