import { Controller, UseGuards, Get, Param, ParseIntPipe, Post, UseInterceptors } from '@nestjs/common';
import { VcnRefService } from './vcn-ref.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AxiosService } from 'src/shared/axios/axios.service';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';

@ApiTags('Vcn Ref')
@Controller('vcn-ref')

/** guard by controller */
@UseGuards(AuthGuard('jwt'))
/** end guard by controller */

// @UseInterceptors(LoggingInterceptor)
@ApiBearerAuth() 
export class VcnRefController {
    constructor(
        private service$    : VcnRefService,
        private axios$      : AxiosService
        ) {

    }

    
    @Get('todos')
    getTodos() {
        return this.axios$.get();
    }
    
    @Post()
    async postTodos() {

        let body = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        let post = await this.axios$.post_json(body);
        console.log('data post: ', post);

        return {status: true, data: post};
        
    }

    @Get()
    get() {
        return this.service$.get();
    }

    @Get(':id')
    getById(@Param('id', new ParseIntPipe()) id: number) {
        return this.service$.getById(id);
    }
    
}
