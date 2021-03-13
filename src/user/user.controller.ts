import { Controller, Get, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import AppRequest from 'src/types/request.type';
import { UserService } from './user.service';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly fireAuth: FirebaseAuthenticationService,
    ) {}

    @Get('/info')
    async getUsers(@Req() req: AppRequest) {
        return req.token;
    }

    @Get('/password/reset')
    async resetPassword(@Req() req: AppRequest) {
        return this.fireAuth.generatePasswordResetLink(req.token.email);
    }
}
