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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const request_type_1 = require("../shared/types/request.type");
const event_dto_1 = require("./dto/event.dto");
const event_service_1 = require("./event.service");
let EventController = class EventController {
    constructor(evenService) {
        this.evenService = evenService;
    }
    async getEvents(req, lon, lat) {
        return this.evenService.getEventsInRange(req.token.uid, lon, lat);
    }
    async getAllEvents(req) {
        return this.evenService.getAllEvents(req.token.uid);
    }
    async getEventByID(id) {
        return this.evenService.getEventById(id);
    }
    async createEvent(req, event) {
        return this.evenService.addEvent(event, req.token.uid);
    }
    async joinEvent(req, id) {
        return this.evenService.joinEvent(req.token.uid, id);
    }
    async skipEvent(req, id) {
        return this.evenService.skipEvent(req.token.uid, id);
    }
};
__decorate([
    swagger_1.ApiQuery({
        name: 'lat',
        description: 'Vĩ độ',
    }),
    swagger_1.ApiQuery({
        name: 'lon',
        description: 'Kinh độ',
    }),
    common_1.Get('/'),
    __param(0, common_1.Req()), __param(1, common_1.Query('lon', common_1.ParseIntPipe)), __param(2, common_1.Query('lat', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getEvents", null);
__decorate([
    common_1.Get('/all'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getAllEvents", null);
__decorate([
    common_1.Get('/detail/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getEventByID", null);
__decorate([
    common_1.Post('/'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, event_dto_1.EventDto]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "createEvent", null);
__decorate([
    common_1.Get('/join/:id'),
    __param(0, common_1.Req()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "joinEvent", null);
__decorate([
    common_1.Get('/skip/:id'),
    __param(0, common_1.Req()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "skipEvent", null);
EventController = __decorate([
    swagger_1.ApiTags('event'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('event'),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventController);
exports.EventController = EventController;
//# sourceMappingURL=event.controller.js.map