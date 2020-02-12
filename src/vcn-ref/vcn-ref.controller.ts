import { Controller, UseGuards, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { VcnRefService } from './vcn-ref.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Vcn Ref')
@Controller('vcn-ref')

/** guard by controller */
@UseGuards(AuthGuard('jwt'))
/** end guard by controller */

@ApiBearerAuth() 
export class VcnRefController {
    constructor(private service$ : VcnRefService) {

    }

    @Get()
    get() {
        return this.service$.get();
    }

    @Get(':id')
    getById(@Param('id', new ParseIntPipe()) id: number) {
        return this.service$.getById(id);
    }

    @Get('/todos')
    getTodos() {
        return this.service$.getTodos();
    }

    @Post('/posts')
    postTodos() {
        return this.service$.postPosts();
    }
    
}
