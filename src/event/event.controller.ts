import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import AppRequest from 'src/shared/types/request.type';
import { EventDto } from './dto/event.dto';

@ApiTags('event')
@ApiBearerAuth()
@Controller('event')
export class EventController {
    @Get('/')
    async getEvents(@Req() req: AppRequest) {
        return '';
    }

    @Post('/')
    async createEvent(@Req() req: AppRequest, @Body() event: EventDto) {
        return event;
    }

    @Get('/join:id')
    async joinEvent(@Req() req: AppRequest, @Param('id') id: string) {
        return id;
    }

    @Get('/skip:id')
    async skipEvent(@Req() req: AppRequest, @Param('id') id: string) {
        return id;
    }
}
