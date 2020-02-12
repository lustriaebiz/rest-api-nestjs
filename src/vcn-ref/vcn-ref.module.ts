import { Module } from '@nestjs/common';
import { VcnRefService } from './vcn-ref.service';
import { VcnRefController } from './vcn-ref.controller';
import { VcnRef } from './vcn-ref.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AxiosService } from 'src/shared/axios/axios.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VcnRef]),
  ],
  providers: [VcnRefService, AxiosService],
  controllers: [VcnRefController]
})
export class VcnRefModule {}
