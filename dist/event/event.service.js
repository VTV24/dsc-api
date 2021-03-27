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
exports.EventService = void 0;
const event_schema_1 = require("../shared/schema/event.schema");
const user_schema_1 = require("../shared/schema/user.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EventService = class EventService {
    constructor(eventModel, userModel) {
        this.eventModel = eventModel;
        this.userModel = userModel;
    }
    async addEvent(event, userId) {
        const place = 'VietNam';
        const eventDoc = {
            location: {
                type: 'Point',
                coordinates: [event.location.longitude, event.location.latitude],
            },
            host: {
                userId: userId,
                displayName: (await this.userModel.findById(userId)).displayName,
            },
            imageMain: event.imageMain,
            images: event.images,
            description: event.description,
            limit: event.limit,
            time: event.time,
            timeCreate: new Date(),
            place: place,
        };
        return new this.eventModel(eventDoc).save();
    }
    async getEventById(eventId) {
        return this.eventModel.findById(eventId);
    }
    async getAllEvents(userId) {
        const usr = await this.userModel.findById(userId);
        if (!usr)
            throw new common_1.NotFoundException({
                message: 'User not found',
            });
        const eventMatch = usr.eventsJoin.map((event) => event.eventId);
        const eventSkip = usr.eventsSkip.map((event) => event.eventId);
        const result = await this.eventModel
            .find({
            _id: {
                $nin: [...eventMatch, ...eventSkip],
            },
            count: {
                $gt: -1,
            },
        })
            .select('_id place imageMain host');
        return result.map((item) => {
            return {
                _id: item._id,
                place: item.place,
                imageMain: item.imageMain,
                userId: item.host.userId,
                displayName: item.host.displayName,
            };
        });
    }
    async getEventsInRange(userId, lon, lat) {
        const usr = await this.userModel.findById(userId);
        const eventMatch = usr.eventsJoin.map((event) => event.eventId);
        const eventSkip = usr.eventsSkip.map((event) => event.eventId);
        return this.eventModel
            .find({
            location: {
                $nearSphere: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [lon, lat],
                    },
                    $maxDistance: usr.range * 1000,
                },
            },
            _id: {
                $nin: [...eventMatch, ...eventSkip],
            },
            count: {
                $gt: -1,
            },
        })
            .limit(100)
            .select('_id place imageMain host');
    }
    async joinEvent(userId, eventId) {
        try {
            const usr = await this.userModel.findById(userId);
            const event = await this.eventModel.findById(eventId);
            console.log(event);
            if (usr.eventsJoin.find((event) => event.eventId == eventId)) {
                throw new common_1.ConflictException({
                    message: 'User already joined event',
                });
            }
            if (!event) {
                throw new common_1.BadRequestException({
                    message: 'Event not found',
                });
            }
            if (event.count >= event.limit) {
                throw new common_1.NotImplementedException({
                    message: 'Event limit exceeded',
                });
            }
            usr.eventsJoin.push({
                eventId: eventId,
                timeJoin: new Date(),
            });
            event.count += 1;
            if (event.limit >= event.count)
                event.count = -1;
            usr.save();
            event.save();
            return '200';
        }
        catch (err) {
            return err;
        }
    }
    async skipEvent(userId, eventId) {
        try {
            const usr = await this.userModel.findById(userId);
            if (usr.eventsSkip.find((event) => event.eventId == eventId)) {
                throw new common_1.BadRequestException({
                    message: 'User already skipped event',
                });
            }
            usr.eventsSkip.push({
                eventId: eventId,
                timeSkip: new Date(),
            });
            usr.save();
            return '200';
        }
        catch (err) {
            return err;
        }
    }
};
EventService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(event_schema_1.Event.name)), __param(1, mongoose_1.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.Model])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map