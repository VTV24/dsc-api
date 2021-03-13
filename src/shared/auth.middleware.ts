import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';
import AppRequest from 'src/types/request.type';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly fireAuth: FirebaseAuthenticationService) {}

    async use(req: AppRequest, res: Response, next: NextFunction) {
        console.log(
            new Date().toUTCString(),
            ` - ${req.ip} ${req.method}: ${req.path}`,
        );
        const token = await req.headers.authorization;
        if (token) {
            req.user = this.fireAuth.verifyIdToken(
                token.replace('Bearer ', ''),
            );
            next();
        } else {
            throw new ForbiddenException();
        }
    }
}
