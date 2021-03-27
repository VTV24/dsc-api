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
exports.EventSchema = exports.Event = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Event = class Event {
};
__decorate([
    mongoose_1.Prop({
        required: true,
        type: {
            coordinates: {
                type: [Number],
            },
            location: {
                type: String,
                enum: ['Point'],
            },
        },
    }),
    __metadata("design:type", Object)
], Event.prototype, "location", void 0);
__decorate([
    mongoose_1.Prop({
        default: '',
    }),
    __metadata("design:type", String)
], Event.prototype, "place", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Event.prototype, "time", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Event.prototype, "timeCreate", void 0);
__decorate([
    mongoose_1.Prop({
        default: false,
    }),
    __metadata("design:type", Boolean)
], Event.prototype, "isCompleted", void 0);
__decorate([
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Event.prototype, "participants", void 0);
__decorate([
    mongoose_1.Prop({
        default: 5,
    }),
    __metadata("design:type", Number)
], Event.prototype, "limit", void 0);
__decorate([
    mongoose_1.Prop({
        default: 1,
    }),
    __metadata("design:type", Number)
], Event.prototype, "count", void 0);
__decorate([
    mongoose_1.Prop({
        type: {
            userId: String,
            displayName: String,
        },
    }),
    __metadata("design:type", Object)
], Event.prototype, "host", void 0);
__decorate([
    mongoose_1.Prop({
        default: '',
    }),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Event.prototype, "imageMain", void 0);
__decorate([
    mongoose_1.Prop({
        default: [],
    }),
    __metadata("design:type", Array)
], Event.prototype, "images", void 0);
__decorate([
    mongoose_1.Prop({
        default: '',
    }),
    __metadata("design:type", String)
], Event.prototype, "chatRoomId", void 0);
Event = __decorate([
    mongoose_1.Schema({
        versionKey: false,
        autoIndex: true,
    })
], Event);
exports.Event = Event;
exports.EventSchema = mongoose_1.SchemaFactory.createForClass(Event);
exports.EventSchema.index({ location: '2dsphere' });
exports.EventSchema.pre('save', async function (next) {
    try {
        next();
    }
    catch (err) {
        next(err);
    }
});
//# sourceMappingURL=event.schema.js.map