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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const chart_room_schema_1 = require("../shared/schema/chart-room.schema");
const message_type_1 = require("../shared/types/message.type");
let ChatService = class ChatService {
    constructor(chatroomModel) {
        this.chatroomModel = chatroomModel;
    }
    async createChatRoom(eventId) {
        return new this.chatroomModel({
            eventId: eventId,
        }).save();
    }
    async sendMessage(chatRoomId, userId, userName, content) {
        const message = {
            content: content,
            created: new Date(),
            senderId: userId,
            senderName: userName,
        };
        const currentChat = await this.chatroomModel.findById(chatRoomId);
        currentChat.message.push(message);
        currentChat.save();
    }
    async pullMessages(chatRoomId) {
        return (await this.chatroomModel.findById(chatRoomId)).message;
    }
};
ChatService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(chart_room_schema_1.ChatRoom.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map