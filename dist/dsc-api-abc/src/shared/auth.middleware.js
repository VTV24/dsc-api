"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const nestjs_firebase_admin_1 = require("@aginix/nestjs-firebase-admin");
const request_type_1 = require("../../../src/shared/types/request.type");
let AuthMiddleware = class AuthMiddleware {
    constructor(fireAuth) {
        this.fireAuth = fireAuth;
    }
    async use(req, res, next) {
        console.log(new Date().toUTCString(), ` - ${req.ip} ${req.method}: ${req.path}`);
        const token = await req.headers.authorization;
        if (token) {
            try {
                req.token = await this.fireAuth.verifyIdToken(token.replace('Bearer ', ''));
                next();
            }
            catch (err) {
                throw new common_1.ForbiddenException(err);
            }
        }
        else {
            throw new common_1.ForbiddenException();
        }
    }
};
AuthMiddleware = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [nestjs_firebase_admin_1.FirebaseAuthenticationService])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map