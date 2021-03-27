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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const request_type_1 = require("../../../src/shared/types/request.type");
const profile_dto_1 = require("./dto/profile.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async searchUser(req, search, page = 1, limit = 1) {
        return this.userService.search(req.token.uid, search, page, limit);
    }
    async getUsers(req) {
        return this.userService.getProfile(req.token.uid);
    }
    async updateProfile(profile, req) {
        return this.userService.updateProfile(profile, req.token.uid);
    }
    async getAccountFirebase(req) {
        return this.userService.getFirebaseAccountInfo(req.token.uid);
    }
    async updateRange(req, range) {
        return this.userService.updateRange(req.token.uid, range);
    }
};
__decorate([
    swagger_1.ApiQuery({
        name: 'page',
        required: false,
        type: Number,
        example: 1,
    }),
    swagger_1.ApiQuery({
        name: 'limit',
        required: false,
        type: Number,
        example: 10,
    }),
    swagger_1.ApiQuery({
        name: 'search',
        required: true,
        type: String,
        example: 'abc',
    }),
    common_1.Get('/search'),
    __param(0, common_1.Req()),
    __param(1, common_1.Query('search')),
    __param(2, common_1.Query('page', common_1.ParseIntPipe)),
    __param(3, common_1.Query('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "searchUser", null);
__decorate([
    common_1.Get('/profile'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    common_1.Post('/profile'),
    __param(0, common_1.Body()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateProfile", null);
__decorate([
    common_1.Get('/account'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAccountFirebase", null);
__decorate([
    common_1.Put('/range'),
    __param(0, common_1.Req()), __param(1, common_1.Query('range', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateRange", null);
UserController = __decorate([
    swagger_1.ApiTags('user'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map