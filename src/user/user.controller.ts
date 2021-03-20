import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import AppRequest from 'src/types/request.type';
import ProfileDto from './dto/profile.dto';
import { UserService } from './user.service';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/profile')
    async getUsers(@Req() req: AppRequest) {
        return this.userService.getProfile(req.token.uid);
    }

    // first login or update profile
    @Post('/profile')
    async updateProfile(@Body() profile: ProfileDto, @Req() req: AppRequest) {
        return this.userService.updateProfile(profile, req.token.uid);
    }

    @Get('/account')
    async getAccountFirebase(@Req() req: AppRequest) {
        return this.userService.getFirebaseAccountInfo(req.token.uid);
    }
}
