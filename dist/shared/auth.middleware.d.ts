import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';
import AppRequest from 'src/shared/types/request.type';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly fireAuth;
    constructor(fireAuth: FirebaseAuthenticationService);
    use(req: AppRequest, res: Response, next: NextFunction): Promise<void>;
}
